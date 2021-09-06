//Validation Code For Inputs 

var username = document.forms['form']['username']; 
var password = document.forms['form']['password']; 

var user_error = document.getElementById('user_error'); 
var pass_error = document .getElementById('pass_error'); 

email.addEventListener('textInput', user_Verify); 
password.addEventListener('textInput', pass_Verify); 

function validated(){ 
  if(email.value.length < 9) { 
    user.style.border = "1px solid red"; 
    pass_error.style.display = "block"; 
    password.focus(); 
    return false; 
  }
} 
function user_Verify() { 
  if(user.value.length >= 8) { 
    user.style.border = "1px solid silver"; 
    user_error.style.display = "none"; 
    return true; 
  }
} 
function pass_Verify(){ 
  if (password.value.length >= 8) { 
      password.style.border = "1px solid silver"; 
      password_error.style.display = "none"; 
      return true; 
  }
}