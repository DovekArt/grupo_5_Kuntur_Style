console.log('login.js success!');
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;


$('email').addEventListener('blur', function() {

    switch (true) {
        case !this.value.trim():
            this.classList.add('is-invalid');
            $('error-email').innerHTML = "Debes ingresar tu email"
            break;
        case  !regExEmail.test(this.value.trim()):
            this.classList.add('is-invalid');
            $('error-email').innerHTML = "El email tiene un formato incorrecto"
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            $('error-email').innerHTML = null
            break;
    }

});


$('pass').addEventListener('blur', function() {

    switch (true) {
        case !this.value.trim():
            this.classList.add('is-invalid');
            $('error-pass').innerHTML = "Debes ingresar tu contraseña"
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            $('error-pass').innerHTML = null
            break;
    }

})



$('form-login').addEventListener('submit', (e) => {
    e.preventDefault();
    
    let elements = e.target.elements;
    let error = false;

    for (let i = 0; i < elements.length - 2; i++) {
        if(!elements[i].value.trim()){
            elements[i].classList.add('is-invalid');
            error = true;
            $('error-pass').innerHTML = "Los campos señalados son obligatorios"
        }
    }

    for (let i = 0; i < elements.length - 2; i++) {
        if(elements[i].classList.contains('is-invalid')){
            error = true
        }
    }

    !error && e.target.submit()


})