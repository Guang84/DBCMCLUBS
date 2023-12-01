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
function gohome(){
    window.history.back()
}