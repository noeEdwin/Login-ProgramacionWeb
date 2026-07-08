document.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("studentForm");
    var fields = ["nombre", "email", "control", "password", "nacimiento"];

    // Validate a single field
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

    });

    form.addEventListener("reset", function () {
        limpiarErrores();
    });
});
