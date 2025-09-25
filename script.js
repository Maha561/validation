
const username = document.getElementById("username");
const password = document.getElementById("password");

function ValidateUserName(name){

    if(name.length<10){

        return false;
    }
    if(!/[A-Z]/.test(name)){

        return false;
    }
     if(!/[!@#$%^&*]/.test(name)){

        return false; 


     }
     if((name.match(/\d/g) || []).length < 2) return false; // rule 3: 2 numbers
    

     return true;
        



};

function validatePassword(pass) {
    // Rule 1: at least 4 numbers
    if ((pass.match(/\d/g) || []).length < 4) return false;

    // Rule 2: at least 1 special symbol
    if (!/[!@#$%^&*]/.test(pass)) return false;

    return true; // all rules passed
}


username.addEventListener('input', () => {
    if (ValidateUserName(username.value)) {
        username.classList.add('valid');
        username.classList.remove('invalid');
    } else {
        username.classList.add('invalid');
        username.classList.remove('valid');
    }
});

// Real-time validation for Password
password.addEventListener('input', () => {
    if (validatePassword(password.value)) {
        password.classList.add('valid');
        password.classList.remove('invalid');
    } else {
        password.classList.add('invalid');
        password.classList.remove('valid');
    }
});

const redirectLink = "https://maha561.github.io/MSD-image_Gallery/";

const form = document.querySelector('.fill');


form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop normal form submission

    if (ValidateUserName(username.value) && validatePassword(password.value)) {
        // redirect to new page if valid
        window.location.href = redirectLink;
    } else {
        alert("Fix username or password first!");
    }
});


