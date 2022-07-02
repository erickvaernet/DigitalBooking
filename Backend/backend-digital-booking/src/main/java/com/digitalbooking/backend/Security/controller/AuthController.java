package com.digitalbooking.backend.Security.controller;

import com.digitalbooking.backend.Security.dto.JwtDTO;
import com.digitalbooking.backend.Security.dto.LoginUsuarioDTO;
import com.digitalbooking.backend.Security.dto.NuevoUsuarioDTO;
import com.digitalbooking.backend.Security.entity.Rol;
import com.digitalbooking.backend.Security.entity.Usuario;
import com.digitalbooking.backend.Security.entity.UsuarioMain;
import com.digitalbooking.backend.Security.enums.RolNombre;
import com.digitalbooking.backend.Security.jwt.JwtProvider;
import com.digitalbooking.backend.Security.service.RolService;
import com.digitalbooking.backend.Security.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {


    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    RolService rolService;
    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/nuevoUsuario")
    public ResponseEntity<?> nuevoUsuario(@Valid @RequestBody NuevoUsuarioDTO nuevoUsuario,HttpServletRequest request,
                                          BindingResult bindingResult) throws UnsupportedEncodingException, MessagingException {
        Usuario usuario = new Usuario(nuevoUsuario.getNombre(),nuevoUsuario.getApellido(), nuevoUsuario.getNombreUsuario(),
                nuevoUsuario.getEmail(), passwordEncoder.encode(nuevoUsuario.getPassword()));

        Set<Rol> roles = new HashSet<>();
        roles.add(rolService.findByRolNombre(RolNombre.ROLE_USER).get());
        if(
            nuevoUsuario.getRoles().contains("ROLE_ADMIN")
            && nuevoUsuario.getRolPassword().contains("RSEu$mZ!XDIQ@9WbixjYviyym3fWimm7lVwfDyPHxXwustcC$!")
        )
            roles.add(rolService.findByRolNombre(RolNombre.ROLE_ADMIN).get());

        usuario.setRoles(roles);
        usuarioService.save(usuario, getSiteURL(request) );
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtDTO> login(@Valid @RequestBody LoginUsuarioDTO loginUsuario, BindingResult bindingResult){
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(loginUsuario.getNombreUsuario(),
                                loginUsuario.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        //Leer mas de jwt y security para mejorar esto, la linea d eabajo creo que no deberia ir
        UsuarioMain user= UsuarioMain.build(usuarioService.findByNombreUsuario(userDetails.getUsername()).get());
        String jwt = jwtProvider.generateToken(authentication);
        JwtDTO jwtDto = new JwtDTO(jwt,user.getId(),userDetails.getUsername(),user.getNombre(),user.getApellido(), user.getEmail(), userDetails.getAuthorities());
        return new ResponseEntity<>(jwtDto, HttpStatus.OK);
    }
    private String getSiteURL(HttpServletRequest request) {
        //String siteURL = request.getRequestURL().toString();
        //return siteURL.replace(request.getServletPath(), "");
        return "http://argenlombiabucketfront.s3-website-us-east-1.amazonaws.com";
    }
    @GetMapping("/verify")
    public ResponseEntity<String> verifyUser(@Param("code") String code) {
        if (usuarioService.verify(code)) {
            return ResponseEntity.ok("Verificación exitosa");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Verificación fallida");
        }
    }
}