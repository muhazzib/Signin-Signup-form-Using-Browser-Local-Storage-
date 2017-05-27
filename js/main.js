var user=document.getElementById("username");
var pass=document.getElementById("password");

function signup(){
    if(user.value!="" && pass.value!=""){
localStorage.setItem("username",user.value);
localStorage.setItem("password",pass.value);
output.innerHTML="Sign Up Successfully"
user.value="";
pass.value="";
    }
    else{
        user.value="";
pass.value="";
        output.innerHTML="Please Enter Both Field"
    }
}
var loginuser=document.getElementById("loginusername");
var loginpass=document.getElementById("loginpassword");
var output=document.getElementById("output");
var localuser;
var localpassword;
function signin(){
localuser=localStorage.getItem("username");
localpassword=localStorage.getItem("password");


if(localuser==loginuser.value && localpassword==loginpass.value){

output.innerHTML="Login Successfully";
localuser="";
localpassword="";
}

else{
    output.innerHTML="Login Unsuccessful";
    loginuser.value="";
loginpass.value="";
}
}
