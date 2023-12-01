var user = "";
function load()
{
    user = prompt("Enter your name : ","here");
    document.getElementById('visitor').innerHTML = ('hello &nbsp')+ user;
}
function Visitorclick()
{
    alert('Things will keep better.\n So do not givie up. \n Thank you '+user+' visit again');
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos){
        document.getElementById("topbar").style.top = "0";
    }
    else{
        document.getElementById("topbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollpos;
}
function developerinfo(){
    document.getElementById('display').innerHTML = 'Email: guangthuanglunggondaimeinss@gmail.com <br> Email: lantanlunggonmei@gmail.com';
}
function teacherinfo(){
    document.getElementById('display').innerHTML = 'Email: Not available at a moment <br> phone no: NA ';
}
function Clublist()
{
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x= document.getElementsByTagName('td');
    for (i = 0; i < x.length; i++)
    {
        if(!x[i].innerHTML.toLowerCase().includes(input))
        {
            x[i].style.display="none";
        }
        else
        {
            x[i].style.display="list-item";
        }
    }
}
/* function submitted()
{
    let a = document.getElementById("email")
    let b = document.getElementById("rollno")
    let c = document.getElementById("cos")
    if(a & b & c != null){
        alert("submitted")
    }
    else{
        alert("mandatory field cannot be empty")
    }
}
*/
/*function submitted(){
    let a = document.getElementById("email")
    let b = document.getElementById("rollno")
    let c = document.getElementById("cos")
    d = a+b+c
    if (confirm){
        if(d != null){
            alert("mandatory field cannot be empty")
        }
        else{
            alert("FEEDBACK SUBMITTED")
        }
        return a = b = c =0;
      //  Response = prompt("your feedback is submitted");
    }
} */