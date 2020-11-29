//selector
const form = document.getElementById('form');
const username = document.getElementById('username');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

//event handler
form.addEventListener('submit',function(e){
    e.preventDefault();          //data willnot submit to server
    checkInputs();
});

//functions
function checkInputs()
{
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const password1value = password1.value.trim();
    const password2value = password2.value.trim();

    if( usernamevalue ==='')
    {
        showError(username, "Username can not be blank");
    }
    else if(!isUsernameValid(usernamevalue))
    {
        showError(username,"Username can only contain lowercase");
    }
    else
    {
        showSuccess(username);
    }  
    if ( emailvalue ==='')
    {
        showError(email,"Email can not be blank");
    }  
    else if(!isEmailValid(emailvalue))
    {
        showError(email,"Email is not valid");
    }
    else{
        showSuccess(email);
    }
    if( password1value ==='')
    {
        showError(password1, "Password can not be blank");
    }
    else
    {
        showSuccess(password1);
    } 
    if( password2value ==='')
    {
        showError(password2, "Password can not be blank");
    }
    else if(password2value != password1value)
    {
        showError(password2, "Password not match");
    }
    else
    {
        showSuccess(password2);
    } 
}

function showError(input,msg)
{
    const formcontrol = input.parentNode;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input)
{
    const formcontrol = input.parentNode;
    formcontrol.className = 'form-control success';
    
}

function isEmailValid(email)
{
    return /^([a-zA-Z0-9_\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9]{2,3})$/.test(email);
}

function isUsernameValid(username)
{
   return /^[a-z)-9]+$/.test(username);
}