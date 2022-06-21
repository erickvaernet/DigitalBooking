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

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    RolService rolService;
    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/nuevoUsuario")
    public ResponseEntity<?> nuevoUsuario(@Valid @RequestBody NuevoUsuarioDTO nuevoUsuario,
                                          BindingResult bindingResult){
        /*
        if(bindingResult.hasErrors()){
            return new ResponseEntity<>(new Mensaje("Campos mal o email invalido"), HttpStatus.BAD_REQUEST);
        }
        if(usuarioService.existsByUsuario(nuevoUsuario.getNombreUsuario())){
            return new ResponseEntity<>(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(usuarioService.existsByEmail(nuevoUsuario.getEmail())){
            return new ResponseEntity<>(new Mensaje("Ese email ya existe"), HttpStatus.BAD_REQUEST);
        }*/

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
        usuarioService.save(usuario);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtDTO> login(@Valid @RequestBody LoginUsuarioDTO loginUsuario, BindingResult bindingResult){
        /*
        if (bindingResult.hasErrors())
            return new ResponseEntity(new Mensaje("Campos mal"), HttpStatus.BAD_REQUEST);
            */
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(loginUsuario.getNombreUsuario(),
                                loginUsuario.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        //Leer mas de jwt y security para mejorar esto, la linea d eabajo creo que no deberia ir
        UsuarioMain user= UsuarioMain.build(usuarioService.findByNombreUsuario(userDetails.getUsername()).get());
        JwtDTO jwtDto = new JwtDTO(jwt, userDetails.getUsername(),user.getNombre(),user.getApellido(), user.getEmail(), userDetails.getAuthorities());
        return new ResponseEntity<>(jwtDto, HttpStatus.OK);
    }
}
