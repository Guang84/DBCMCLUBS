function login(){
var userid = document.getElementsByName("id");
var password = document.getElementsByName("password");
var id = "user1";
var passwd = "user123";
if(userid.trim() == "" || password.trim() == ""){
    alert("ID and password field cannot be empty");
  //  window.location = "contact.html";
}
elseif(userid.trim() == "id" || password.trim() == "passwd")
{
    alert("welcome ",+userid);
    window.location = "contact.html";
}
}