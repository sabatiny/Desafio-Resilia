let email = document.getElementById('email');
let message = document.getElementById('message');
let sector = document.getElementById('sector');
window.addEventListener("submit", function(event){
  event.preventDefault();
  validateEmail();
  validateMessage();
  validateSector();
  clearForm();
})

function validateEmail(){
  if(email.value == 0 ){
    document.getElementById('email-error').innerHTML = 'Preencha o campo'
  }else{
    document.getElementById('email-error').innerHTML = ''
  }
}

function validateMessage(){
  if(message.value == 0){
    document.getElementById('message-error').innerHTML = 'Escreva uma mensagem'
  }else{
    document.getElementById('message-error').innerHTML = ''
  }
}

function validateSector(){
  if (sector.value == "Por favor selecione"){
    document.getElementById('sector-error').innerHTML = 'Selecione o setor de sua empresa';
  } else{
    document.getElementById('sector-error').innerHTML = '';
  }
}

function clearForm(){
  email = '';
  message = '';
  sector = ''
}
