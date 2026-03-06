document.addEventListener('DOMContentLoaded', () => {

    // Object literal
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const inputCC = document.querySelector('#cc')
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner')

    // asignar eventos
    inputEmail.addEventListener('input', validacionInputs)
    inputAsunto.addEventListener('input', validacionInputs)
    inputMensaje.addEventListener('input', validacionInputs)
    inputCC.addEventListener('input', validacionCC)
    formulario.addEventListener('submit', enviarEmail)
    btnReset.addEventListener('click', (event) => {
        event.preventDefault()
        resetFormulario()
    })

    function enviarEmail(event) {
        event.preventDefault()
        spinner.classList.add('flex')
        spinner.classList.remove('hidden')

        setTimeout(() => {
            spinner.classList.remove('flex')
            spinner.classList.add('hidden')
            resetFormulario()

            // Crear un elemento exito
            const alertaExito = document.createElement('P')
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase')
            alertaExito.textContent = 'Mensaje enviado correctamente'
            formulario.appendChild(alertaExito)

            setTimeout(() => {
                alertaExito.remove()
            }, 3000);
        }, 3000);
    }

    function validacionInputs(event) {

        const element = event.target

        if (element.value.trim() === '') {
            mostrarAlerta(`El campo ${element.id} es obligatorio`, element.parentElement)
            email[element.name] = ''
            comprobarEmail()
            return
        }

        if (element.id === 'email' && !validarEmail(element.value)) {
            mostrarAlerta(`Email no es válido`, element.parentElement)
            email[element.name] = ''
            comprobarEmail()
            return
        }

        limpiarAlerta(element.parentElement)

        // Asignar los valores
        email[element.name] = element.value.trim().toLowerCase()

        // Validar si el email es correcto
        comprobarEmail()
    }

    function validacionCC(event) {
        const element = event.target

        if (element.value.trim() !== '' && !validarEmail(element.value)) {
            mostrarAlerta(`Email no es válido`, element.parentElement)
            email[element.name] = 'cc'
            return
        }
        limpiarAlerta(element.parentElement)

        // Asignar los valores
        email[element.name] = element.value.trim().toLowerCase()
    }
    function mostrarAlerta(mensaje, referencia) {
        // Validar alerta
        limpiarAlerta(referencia)

        // Generar HTML para el alerta
        const mensajeAlerta = document.createElement('P')
        mensajeAlerta.textContent = mensaje
        mensajeAlerta.classList.add('bg-red-600', 'text-white', 'p-2')

        // Inyectar elemento html al formulario
        referencia.appendChild(mensajeAlerta)
    }

    function limpiarAlerta(referencia) {
        const alertaExist = referencia.querySelector('.bg-red-600')
        if (alertaExist) alertaExist.remove()
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        return regex.test(email)
    }

    function comprobarEmail() {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return
        }
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false
    }

    function resetFormulario() {
        // reiniciar objeto
        email.email = ''
        email.asunto = ''
        email.mensaje = ''
        delete email.cc
        formulario.reset()
        comprobarEmail()
    }
})

