const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
    apellido: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                document.getElementById('grupo__apellido').classList.remove('form__grupo-incorrecto');
                document.getElementById('grupo__apellido').classList.add('form__grupo-correcto');
                document.querySelector('#grupo__apellido .advertencia__input').classList.remove('advertencia__input-activo');
            } else {
                document.getElementById('grupo__apellido').classList.add('form__grupo-incorrecto');
                document.getElementById('grupo__apellido').classList.remove('form__grupo-correcto');
                document.querySelector('#grupo__apellido .advertencia__input').classList.add('advertencia__input-activo');
            }
            break;
        case "nombre":

            break;
        case "email":

            break;
        case "phone":

            break;
    }
}

const validarCampo = () =>{
    
} 

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})