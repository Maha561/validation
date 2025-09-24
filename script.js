
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