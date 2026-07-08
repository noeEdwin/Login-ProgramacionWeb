document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formLogin');
    const btnTogglePass = document.getElementById('btnTogglePass');
    const passwordInput = document.getElementById('password');
    
    if (btnTogglePass && passwordInput) {
        btnTogglePass.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
    }

    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (typeof limpiarErrores === 'function') {
                limpiarErrores();
            }
            
            let usuario = document.getElementById('usuario').value;
            const correo = document.getElementById('correo').value;
            const password = passwordInput.value;
            
            let formularioValido = true;
            
            if (typeof limpiarEspacios === 'function') {
                usuario = limpiarEspacios(usuario);
            }
            if (typeof formatearNombrePropio === 'function') {
                usuario = formatearNombrePropio(usuario);
            }
            document.getElementById('usuario').value = usuario;
            
            if (usuario === "") {
                mostrarError("usuario", "Por favor ingrese un nombre de usuario.");
                formularioValido = false;
            } else if (typeof soloLetras === 'function' && !soloLetras(usuario)) {
                mostrarError("usuario", "El nombre solo debe contener letras y espacios.");
                formularioValido = false;
            }
            
            if (!validarCorreo(correo)) {
                mostrarError("correo", "Ingrese un correo electrónico válido (ej: usuario@dominio.com).");
                formularioValido = false;
            }
            
            if (!validarPassword(password)) {
                mostrarError("password", "La contraseña debe tener mín. 8 caracteres, mayúscula, minúscula, número y un carácter especial.");
                formularioValido = false;
            }
            
            if (formularioValido) {
                localStorage.setItem('usuarioActual', usuario);
                window.location.href = 'index.html';
            }
        });
    }
});