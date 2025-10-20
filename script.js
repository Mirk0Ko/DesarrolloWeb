document.addEventListener('DOMContentLoaded', () => {
    console.log('Validación de formulario - Estilo directo.');

    const form = document.getElementById('suscripcionForm');
    const passInput = document.getElementById('contrasena');
    const repeatPassInput = document.getElementById('repetirContrasena');
    const tituloFormulario = document.getElementById('tituloFormulario');

    const toggleError = (input, msg, isValid) => {
        const errorP = document.getElementById(`error-${input.id}`);
        if (!errorP) return true; 

        if (isValid) {
            errorP.style.display = 'none';
            input.classList.remove('error');
            input.style.borderColor = '';
            return true;
        } else {
            errorP.textContent = msg;
            errorP.style.display = 'block';
            input.classList.add('error');
            input.style.borderColor = 'red';
            return false;
        }
    };

   
    // --- Nombre Completo ---
    const nombreInput = document.getElementById('nombre');
    nombreInput.addEventListener('blur', () => {
        const v = nombreInput.value.trim();
        const regex = /^[a-zA-Z\s]{7,}$/;
        const msg = 'Debe tener más de 6 letras y al menos un espacio.';
        const isValid = regex.test(v) && v.includes(' ');
        toggleError(nombreInput, msg, isValid);
    });
    nombreInput.addEventListener('focus', () => toggleError(nombreInput, '', true));

    // --- Email ---
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', () => {
        const v = emailInput.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const msg = 'Debe tener un formato de email válido.';
        const isValid = regex.test(v);
        toggleError(emailInput, msg, isValid);
    });
    emailInput.addEventListener('focus', () => toggleError(emailInput, '', true));
    

    // --- Contraseña ---
    passInput.addEventListener('blur', () => {
        const v = passInput.value.trim();
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const msg = 'Al menos 8 caracteres, con letras y números.';
        const isValid = regex.test(v);
        toggleError(passInput, msg, isValid);
    });
    passInput.addEventListener('focus', () => toggleError(passInput, '', true));

    // --- Repetir Contraseña ---
    repeatPassInput.addEventListener('blur', () => {
        const v = repeatPassInput.value.trim();
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Validación de formato/longitud
        const msg = 'Ambas contraseñas deben ser iguales.';
        const isValid = regex.test(v) && (v === passInput.value);
        toggleError(repeatPassInput, msg, isValid);
    });
    repeatPassInput.addEventListener('focus', () => toggleError(repeatPassInput, '', true));
    
    // =======================================================
    // 2. EVENTO SUBMIT (Requiere repetir la lógica de validación)
    // =======================================================

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        let todoValido = true;
        let resumenErrores = [];
        let dataFormulario = {};

        // Ejemplo de re-validación de un campo en submit:
        const vNombre = nombreInput.value.trim();
        const regexNombre = /^[a-zA-Z\s]{7,}$/;
        const isValidNombre = regexNombre.test(vNombre) && vNombre.includes(' ');
        
        if (!isValidNombre) {
            todoValido = false;
            resumenErrores.push('- nombre: Más de 6 letras y al menos un espacio.');
            toggleError(nombreInput, 'Más de 6 letras y al menos un espacio.', false);
        }
        dataFormulario.nombre = vNombre;


        if (todoValido) {
    
        } else {
    
        }
    });
});