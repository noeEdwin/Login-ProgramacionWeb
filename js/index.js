document.addEventListener("DOMContentLoaded", function () {
    var usuarioGuardado = localStorage.getItem("usuarioActual");
    var navUsuario = document.getElementById("navUsuario");
    var navUsuarioMovil = document.getElementById("navUsuarioMovil");
    var btnSalir = document.getElementById("btnSalir");

    if (!usuarioGuardado) {
        window.location.href = "login.html";
        return;
    }
    if (navUsuario) {
        navUsuario.textContent = usuarioGuardado;
    }
    if (navUsuarioMovil) {
        navUsuarioMovil.textContent = usuarioGuardado;
    }
    if (btnSalir) {
        btnSalir.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("usuarioActual");
            window.location.href = "login.html";
        });
    }

    var form = document.getElementById("studentForm");
    var fields = ["nombre", "email", "control", "password", "nacimiento"];
    var btnTogglePassword = document.getElementById("togglePassword");
    var passwordInput = document.getElementById("password");
    var pwIcon = document.getElementById("pwIcon");

    var btnMenuToggle = document.getElementById("menu-toggle");
    var sidebar = document.getElementById("sidebar");
    var sidebarOverlay = document.getElementById("sidebarOverlay");
    var btnUsersToggle = document.getElementById("users-toggle");
    var usersSubmenu = document.getElementById("users-submenu");
    var chevron = document.getElementById("chevron");

    if (btnTogglePassword && passwordInput) {
        btnTogglePassword.addEventListener("click", function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                if (pwIcon) pwIcon.textContent = "visibility_off";
            } else {
                passwordInput.type = "password";
                if (pwIcon) pwIcon.textContent = "visibility";
            }
        });
    }

    if (btnMenuToggle && sidebar && sidebarOverlay) {
        btnMenuToggle.addEventListener("click", function () {
            var isOpen = sidebar.classList.contains("sidebar-open");
            if (isOpen) {
                sidebar.classList.remove("sidebar-open");
                sidebarOverlay.classList.remove("active");
                document.getElementById("mainContent").classList.remove("sidebar-shifted");
            } else {
                sidebar.classList.add("sidebar-open");
                sidebarOverlay.classList.add("active");
                document.getElementById("mainContent").classList.add("sidebar-shifted");
            }
        });
        sidebarOverlay.addEventListener("click", function () {
            sidebar.classList.remove("sidebar-open");
            sidebarOverlay.classList.remove("active");
            document.getElementById("mainContent").classList.remove("sidebar-shifted");
        });
    }

    if (btnUsersToggle && usersSubmenu && chevron) {
        btnUsersToggle.addEventListener("click", function () {
            if (usersSubmenu.style.display === "none" || usersSubmenu.style.display === "") {
                usersSubmenu.style.display = "block";
                chevron.textContent = "expand_less";
            } else {
                usersSubmenu.style.display = "none";
                chevron.textContent = "expand_more";
            }
        });
    }

    function validateField(id) {
        var value = document.getElementById(id).value.trim();
        switch (id) {
            case "nombre":
                if (value === "") {
                    mostrarError("nombre", "El nombre es obligatorio.");
                    return false;
                }
                if (!soloLetras(value)) {
                    mostrarError("nombre", "Solo se permiten letras y espacios.");
                    return false;
                }
                limpiarCampo("nombre");
                return true;
            case "email":
                if (value === "") {
                    mostrarError("email", "El correo es obligatorio.");
                    return false;
                }
                if (!validarCorreo(value)) {
                    mostrarError("email", "Ingrese un correo válido.");
                    return false;
                }
                limpiarCampo("email");
                return true;
            case "control":
                if (value === "") {
                    mostrarError("control", "El número de control es obligatorio.");
                    return false;
                }
                if (!validarNumeroControl(value)) {
                    mostrarError("control", "Debe ser exactamente 6 dígitos.");
                    return false;
                }
                limpiarCampo("control");
                return true;
            case "password":
                if (value === "") {
                    mostrarError("password", "La contraseña es obligatoria.");
                    return false;
                }
                if (!validarPassword(value)) {
                    mostrarError("password", "Mínimo 8 caracteres, mayúscula, minúscula, número y carácter especial.");
                    return false;
                }
                limpiarCampo("password");
                return true;
            case "nacimiento":
                if (value === "") {
                    mostrarError("nacimiento", "La fecha de nacimiento es obligatoria.");
                    return false;
                }
                limpiarCampo("nacimiento");
                return true;
            default:
                return true;
        }
    }

    function limpiarCampo(id) {
        var errorId = "error" + id.charAt(0).toUpperCase() + id.slice(1);
        var errorEl = document.getElementById(errorId);
        var inputEl = document.getElementById(id);
        if (errorEl) {
            errorEl.textContent = "";
        }
        if (inputEl) {
            inputEl.classList.remove("input-error");
        }
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        limpiarErrores();
        var allValid = true;
        fields.forEach(function (id) {
            if (!validateField(id)) {
                allValid = false;
            }
        });
        if (!allValid) {
            return;
        }
        var fechaNacimiento = document.getElementById("nacimiento").value;
        var edad = calcularEdad(fechaNacimiento);
        var esMayor = esMayorDeEdad(fechaNacimiento);
        var nombreAlumno = document.getElementById("nombre").value.trim();
        var modalTitle = document.getElementById("modalTitle");
        var modalDescription = document.getElementById("modalDescription");
        var modalIcon = document.getElementById("modalIcon");
        if (esMayor) {
            modalTitle.textContent = "¡Alumno Mayor de Edad!";
            modalTitle.className = "fw-bold mb-2 text-primary";
            modalDescription.innerHTML = `El alumno <strong>${nombreAlumno}</strong> tiene <strong>${edad} años</strong>.<br>Cumple con la mayoría de edad para el registro.`;
            modalIcon.innerHTML = '<span class="material-symbols-outlined text-primary" style="font-size: 40px;">check_circle</span>';
            modalIcon.className = "mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle";
        } else {
            modalTitle.textContent = "Alumno Menor de Edad";
            modalTitle.className = "fw-bold mb-2 text-warning";
            modalDescription.innerHTML = `El alumno <strong>${nombreAlumno}</strong> tiene <strong>${edad} años</strong>.<br>Es menor de edad, se requerirá carta responsiva del tutor.`;
            modalIcon.innerHTML = '<span class="material-symbols-outlined text-warning" style="font-size: 40px;">warning</span>';
            modalIcon.className = "mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-warning-subtle";
        }
        var ageModalEl = document.getElementById("ageModal");
        var modal = new bootstrap.Modal(ageModalEl);
        modal.show();
    });

    form.addEventListener("reset", function () {
        limpiarErrores();
    });
});