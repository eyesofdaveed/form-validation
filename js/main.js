const form = document.querySelector('#form');
const login = document.querySelector('#login');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const pass2 = document.querySelector('#pass2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    check();
});

function check() {
    const loginVal = login.value.trim(); // trim() removes extra white space
    const emailVal = email.value.trim();
    const passVal = pass.value.trim();
    const pass2Val = pass2.value.trim();

    if(loginVal === '') {
        // add error class
        setError(login);
    } else {
        // add success class
        setSuccess(login);
    }

    if(emailVal === '' || !isEmail(emailVal)) {
        // add error class
        setError(email);
    } else {
        // add success class
        setSuccess(email);
    }

    if (passVal === '' ) {
        setError(pass);
    } else {
        setSuccess(pass);
    }

    if (passVal === '') {
        setError(pass2);
    } else if (passVal !== pass2Val){
        setError(pass);
        setError(pass2);        
    } else {
        setSuccess(pass2);
    }

}

function setError(input) {
    
    const formControl = input.parentElement; // .form-control
    
    // add error class
    formControl.className = 'form-control error';
}

function setSuccess(input) {

    const formControl = input.parentElement; // .form-control
    
    // add success class
    formControl.className = 'form-control success';
}


function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}