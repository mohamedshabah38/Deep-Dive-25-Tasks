const loginBtn = document.getElementById('#login');
const registerBtn = document.getElementById('#register');
const loginForm = document.getElementById('.login-form');
const registerForm = document.getElementById('.register-form');


loginBtn.addEventListener('click', () => {
    registerBtn.style.background = '#21264d';
    loginBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    loginForm.style.left = '50%';
    registerForm.style.left = '-50%';

    loginForm.style.opacity = '1';
    registerForm.style.opacity = '0';

    document.querySelector('.col-1').style.borderRadius = '0 30% 20% 0';
});

registerBtn.addEventListener('click', () => {
    loginBtn.style.background = '#21264d';
    registerBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    loginForm.style.left = '150%';
    registerForm.style.left = '50%';

    loginForm.style.opacity = '0';
    registerForm.style.opacity = '1';

    document.querySelector('.col-1').style.borderRadius = '20% 0 0 30%';
});

