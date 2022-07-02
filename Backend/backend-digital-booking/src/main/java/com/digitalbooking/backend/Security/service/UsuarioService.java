package com.digitalbooking.backend.Security.service;

import com.digitalbooking.backend.Security.entity.Usuario;
import com.digitalbooking.backend.Security.repository.UsuarioRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;
import java.io.UnsupportedEncodingException;
import java.util.Optional;

@Service
@Transactional
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private JavaMailSender mailSender;

    public Optional<Usuario> findByNombreUsuario(String username) {
        return usuarioRepository.findByNombreUsuario(username);
    }
    public boolean existEmail(String email) {
        return usuarioRepository.existsByEmail(email);
    }
    public boolean existUsername(String username){
        return  usuarioRepository.existsByNombreUsuario(username);
    }

    public void save(Usuario user,String siteURL) throws UnsupportedEncodingException, MessagingException {
        String randomCode = RandomString.make(64);
        user.setVerificationCode(randomCode);
        user.setEnabled(false);
        usuarioRepository.save(user);
        sendVerificationEmail(user, siteURL);
    }

    private void sendVerificationEmail(Usuario user, String siteURL) throws MessagingException, UnsupportedEncodingException {
        String toAddress = user.getEmail();
        String fromAddress = "gregotestapi@gmail.com";
        String senderName = "Digital Booking";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Digital Booking.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.getNombre());
        String verifyURL = siteURL + "/verify?code=" + user.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);
    }
    public boolean verify(String verificationCode) {
        Usuario user = usuarioRepository.findByVerificationCode(verificationCode);

        if (user == null || user.isEnabled()) {
            return false;
        } else {
            user.setVerificationCode(null);
            user.setEnabled(true);
            usuarioRepository.save(user);
            return true;
        }
    }
}
