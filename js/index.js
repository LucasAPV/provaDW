const USERNAME = document.querySelector('#user');
const PASSWORD = document.querySelector('#password');
const BTN = document.querySelector('#btn');

BTN.addEventListener('click', () => {
  if(String(USERNAME.value) == 'admin' && String(PASSWORD.value) == 'admin'){
    window.location.href = './principal.html';
  }else{
    alert('Senha ou Usuario incorretos')
    console.log(String(USERNAME.value));
    console.log(String(PASSWORD.value));
  }
})