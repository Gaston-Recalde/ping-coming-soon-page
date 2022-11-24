const input = document.getElementById('email');
const form = document.getElementById('form');
const small = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault();

    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regEmail.test(input.value) ){
        small.className = 'email__small';
        input.classList.add('email__invalid');
        input.placeholder = 'email@example.com';
    } else {
        small.className = 'small';
        input.classList.remove('email__invalid');
    }
});