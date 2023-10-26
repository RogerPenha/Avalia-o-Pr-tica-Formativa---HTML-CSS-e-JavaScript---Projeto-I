var nav = document.getElementsByTagName('nav');
function aparecer_apagar(){
    if(nav.style.display === "none"){
        nav.style.display = "block";
    }else{
        nav.style.display = "none";
    }
}