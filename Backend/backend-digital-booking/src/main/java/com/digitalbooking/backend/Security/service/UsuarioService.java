package com.digitalbooking.backend.Security.service;

import com.digitalbooking.backend.Security.entity.Usuario;
import com.digitalbooking.backend.Security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Optional<Usuario> findByNombreUsuario(String username) {
        return usuarioRepository.findByNombreUsuario(username);
    }
    public boolean existEmail(String email) {
        return usuarioRepository.existsByEmail(email);
    }
    public boolean existUsername(String username){
        return  usuarioRepository.existsByNombreUsuario(username);
    }

    public void save(Usuario usuario) {
         usuarioRepository.save(usuario);
    }

}
