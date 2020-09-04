const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = email.value.trim();
    checkEmpty(emailValue, email, 'Email cannot be empty');
})

function checkEmpty (value, input, message) {
    if (value === '') {
        //show error
        //add error class
        setErrorFor(input, message);
    }
    else {
        //add success class
        setSuccessFor(input);
    }
}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const text = formControl.querySelector('p');
    text.innerText = message;
    input.className = 'input error';
    text.className = 'error-msg error';
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    const text = formControl.querySelector('p');
    input.className='input';
    text.className='error-msg';
}