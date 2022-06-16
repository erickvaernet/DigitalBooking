package com.digitalbooking.backend.Security.entity;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UsuarioMain implements UserDetails {
    private String nombre;
    private String apellido;
    private String username;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public UsuarioMain(String nombre, String apellido, String username, String email, String password, Collection<? extends GrantedAuthority> authorities) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }

    public static UsuarioMain build(Usuario usuario){
        List<GrantedAuthority> authorities = usuario.getRoles().stream()
                .map(
                        role -> new SimpleGrantedAuthority(role.getRolNombre().name())
                )
                .collect(Collectors.toList());
        return new UsuarioMain( usuario.getNombre(), usuario.getApellido(),usuario.getNombreUsuario(),
                usuario.getEmail(),usuario.getPassword(),authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
