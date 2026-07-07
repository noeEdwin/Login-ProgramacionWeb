/**
 * validarCorreo
 * Valida que una cadena de texto tenga un formato de correo electrónico válido.
 *
 * @param {string} correo - La dirección de correo electrónico a validar.
 * @returns {boolean} true si el correo tiene un formato válido, false si no.
 *
 * @example
 * validarCorreo("usuarioSencillo@ejemplo.com");   // true
 * validarCorreo("correo@dominio.mx");    // true
 * validarCorreo("correo100%realNoFAke.com");        // false
 * validarCorreo("");                      // false
 */
function validarCorreo(correo) {
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
        return false;
    }

    if (!expresion.test(correo)) {
        return false;
    }

    return true;
}

/**
 * soloLetras
 * Verifica que una cadena contenga solo letras (mayúsculas, minúsculas)
 * y espacios. Acepta vocales acentuadas (á, é, í, ó, ú) y ñ.
 *
 * @param {string} texto - El texto a validar.
 * @returns {boolean} true si solo contiene letras y espacios, false si no.
 *
 * @example
 * soloLetras("María José");     // true
 * soloLetras("Ana");            // true
 * soloLetras("José García");    // true
 * soloLetras("Ana123");         // false
 * soloLetras("texto-con-guiones"); // false
 */
function soloLetras(texto) {
    let expresion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

    if (texto === "") {
        return false;
    }

    if (!expresion.test(texto)) {
        return false;
    }

    return true;
}

/**
 * validarLongitud
 * Valida que la representación en cadena de un número no exceda una
 * longitud máxima de dígitos.
 *
 * @param {number|string} numero - El número a evaluar.
 * @param {number} maxLongitud - La cantidad máxima de dígitos permitidos.
 * @returns {boolean} true si la longitud es válida, false si está vacío,
 *   contiene letras o excede la longitud máxima.
 *
 * @example
 * validarLongitud(1234567890, 10);   // true
 * validarLongitud(12345, 10);        // true
 * validarLongitud(12345678901, 10);  // false
 */
function validarLongitud(numero, maxLongitud) {
    let valorATexto = String(numero).trim();

    if (valorATexto === "") {
        return false;
    }

    for (let i = 0; i < valorATexto.length; i++) {
        let caracter = valorATexto[i];
        if (caracter < "0" || caracter > "9") {
            return false;
        }
    }

    if (valorATexto.length > maxLongitud) {
        return false;
    }

    return true;
}

/**
 * calcularEdad
 * Calcula la edad en años cumplidos a partir de una fecha de nacimiento
 * en formato "YYYY-MM-DD".
 *
 * @param {string} fechaNacimiento - La fecha de nacimiento en formato "YYYY-MM-DD".
 * @returns {number} La edad en años como número entero. Retorna 0 si la fecha
 *   está vacía, no es válida o es posterior a la fecha actual.
 *
 * @example
 * calcularEdad("2000-05-15");  // 26 (según fecha actual)
 * calcularEdad("1990-01-01");  // 36
 * calcularEdad("");            // 0
 */
function calcularEdad(fechaNacimiento) {
    if (fechaNacimiento === "") {
        return 0;
    }

    let nacimiento = new Date(fechaNacimiento);
    let hoy = new Date();

    if (nacimiento > hoy) {
        return 0;
    }

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

/**
 * esMayorDeEdad
 * Determina si una persona tiene 18 años o más según su fecha de nacimiento.
 *
 * @param {string} fechaNacimiento - La fecha de nacimiento en formato "YYYY-MM-DD".
 * @returns {boolean} true si la persona es mayor de edad (>= 18), false si no.
 *
 * @example
 * esMayorDeEdad("2000-01-01");  // true
 * esMayorDeEdad("2010-06-20");  // false
 * esMayorDeEdad("2007-07-04");  // true
 */
function esMayorDeEdad(fechaNacimiento) {
    let edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}

/**
 * validarPassword
 * Valida que una contraseña cumpla con los requisitos de seguridad:
 *   - Mínimo 8 caracteres
 *   - Al menos una letra mayúscula (A-Z)
 *   - Al menos una letra minúscula (a-z)
 *   - Al menos un número (0-9)
 *   - Al menos un carácter especial (!@#$%^&*)
 *
 * @param {string} password - La contraseña a validar.
 * @returns {boolean} true si cumple todos los requisitos, false si no.
 *
 * @example
 * validarPassword("NoSeMeVaOlvidar@123");   // true
 * validarPassword("Segurisiiiiiiiiiiiima#20223");   // true
 * validarPassword("claveholaaa");         // false
 * validarPassword("12345678999999999999");      // false
 */
function validarPassword(password) {
    if (password === "") {
        return false;
    }

    if (password.length < 8) {
        return false;
    }

    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspecial = false;

    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];

        if (caracter >= "A" && caracter <= "Z") {
            tieneMayuscula = true;
        } else if (caracter >= "a" && caracter <= "z") {
            tieneMinuscula = true;
        } else if (caracter >= "0" && caracter <= "9") {
            tieneNumero = true;
        } else {
            tieneEspecial = true;
        }
    }

    if (!tieneMayuscula) return false;
    if (!tieneMinuscula) return false;
    if (!tieneNumero) return false;
    if (!tieneEspecial) return false;

    return true;
}

/**
 * validarTelefono
 * Valida que un número de teléfono tenga exactamente 10 dígitos.
 * Elimina espacios, guiones y paréntesis antes de validar.
 *
 * @param {string} telefono - El número de teléfono a validar.
 * @returns {boolean} true si el teléfono contiene exactamente 10 dígitos,
 *   false si está vacío, tiene letras o no tiene 10 dígitos.
 *
 * @example
 * validarTelefono("5551234567");      // true
 * validarTelefono("(555) 123-4567");  // true
 * validarTelefono("123");             // false
 * validarTelefono("abcdefghij");      // false
 */
function validarTelefono(telefono) {
    let limpio = telefono.replace(/[\s\-\(\)]/g, "");

    if (limpio === "") {
        return false;
    }

    let expresion = /^[0-9]+$/;
    if (!expresion.test(limpio)) {
        return false;
    }

    if (limpio.length !== 10) {
        return false;
    }

    return true;
}

/**
 * formatearNombrePropio
 * Convierte una cadena a formato de nombre propio: la primera letra
 * de cada palabra en mayúscula y el resto en minúscula.
 *
 * @param {string} texto - El texto a formatear.
 * @returns {string} El texto formateado en nombre propio. Retorna ""
 *   si el texto está vacío.
 *
 * @example
 * formatearNombrePropio("MARÍA JOSÉ GARCÍA");  // "María José García"
 * formatearNombrePropio("pepe perez");          // "Pepe Perez"
 * formatearNombrePropio("");                    // ""
 */
function formatearNombrePropio(texto) {
    if (texto === "") {
        return "";
    }

    let palabras = texto.toLowerCase().split(" ");
    let resultado = "";

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let primeraLetra = palabra.charAt(0).toUpperCase();
        let resto = palabra.slice(1);

        if (i > 0) {
            resultado = resultado + " ";
        }

        resultado = resultado + primeraLetra + resto;
    }

    return resultado;
}

/**
 * mostrarError
 * Muestra un mensaje de error debajo de un campo del formulario y resalta
 * el borde del campo con una clase CSS de error.
 *
 * @param {string} campo - El id del campo input donde mostrar el error.
 * @param {string} mensaje - El mensaje de error a mostrar.
 * @returns {void} No retorna nada, modifica el DOM directamente.
 *
 * @example
 * mostrarError("correo", "Ingrese un correo válido.");
 * mostrarError("password", "Mínimo 8 caracteres.");
 */
function mostrarError(campo, mensaje) {
    let errorId = "error" + campo.charAt(0).toUpperCase() + campo.slice(1);
    let errorEl = document.getElementById(errorId);
    let inputEl = document.getElementById(campo);

    if (errorEl) {
        errorEl.textContent = mensaje;
    }

    if (inputEl) {
        inputEl.classList.add("input-error");
    }
}

/**
 * limpiarErrores
 * Limpia todos los mensajes de error del formulario y quita la clase
 * de resaltado de error de todos los campos input.
 *
 * @param {void} - No recibe parámetros.
 * @returns {void} No retorna nada, modifica el DOM directamente.
 *
 * @example
 * limpiarErrores(); // Limpia todos los errores visibles
 */
function limpiarErrores() {
    let errores = document.querySelectorAll(".error-message");
    for (let i = 0; i < errores.length; i++) {
        errores[i].textContent = "";
    }

    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("input-error");
    }
}
