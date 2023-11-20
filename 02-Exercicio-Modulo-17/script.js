let nome = document.getElementById('nome')
let email = document.getElementById('email')
let form = document.querySelector('form')
let textEmail = document.getElementById('textEmail')

form.addEventListener('submit' , (e) => {
    e.preventDefault()
})

email.addEventListener("keyup" , () => {
    if(validadorEmail(email.value) !== true) {
        textEmail.textContent = "O formato do email deve ser Ex: email@gmail.com"
    } else {
        textEmail.textContent = ''
    }
})

function validar() {
    if(nome.value.length <3) {
        alert('O Nome deve conter no minimo 3 caracteres')
    } else{
        return true;}
}

function validadorEmail(email) {
    let emailVal = /^[_a-z0-9-]+(\.[_a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    return emailVal.test(email)
}

// jquery
$('#telefone').mask('(00) 00000-0000');
$('#cep').mask('00000-000');