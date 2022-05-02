
let firstPass = document.getElementById("first-pass");
let secondPass = document.getElementById("second-pass");
let thirdPass = document.getElementById("third-pass");
let fourthPass = document.getElementById("fourth-pass");

function generate(){
        
    let passLen = document.getElementById("num").value;
    let  chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = passLen;
    let password1 = "" , password2 ="" ,password3 = "" , password4 = "" ;
  
    for (let i = 0; i < passwordLength; i++) {
        
    let randomNumber = Math.floor(Math.random() * chars.length)  ;
    password1 += chars.substring(randomNumber, randomNumber +1);

    let randomPass2 = (randomNumber*20) % chars.length ; 
    password2 += chars.substring(randomPass2, randomPass2 +1);

    let randomPass3 = (randomNumber*5) % chars.length ; 
    password3 += chars.substring(randomPass3, randomPass3 +1);

    let randomPass4 = (randomNumber*10) % chars.length ; 
    password4 += chars.substring(randomPass4, randomPass4 +1);

    }
    
    firstPass.textContent = password1;
    secondPass.textContent = password2;
    thirdPass.textContent = password3;
    fourthPass.textContent = password4;
    
}