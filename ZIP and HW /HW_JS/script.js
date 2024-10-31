// Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".

// Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).

// Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.

const loginForm = document.getElementById('loginForm');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

const correctLogin = 'aueaue';
const correctPassword = '77777';

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const loginValue = loginInput.value; 
    const passwordValue = passwordInput.value; 
    
    if(loginValue !== correctLogin && passwordValue !== correctPassword){
      message.textContent = 'Ошибка';
    } else if (loginValue !== correctLogin)  {
      message.textContent = 'Ошибка опять';
    } else if (passwordValue !== correctPassword) {
      message.textContent = 'Мимо';
    } else {
      message.textContent = 'Успех';
    }
  });