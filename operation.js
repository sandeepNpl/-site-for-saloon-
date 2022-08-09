var menubutton = document.getElementById('menubtn');
var menu = document.getElementById('menuimg');
var navigation = document.getElementById('navbar');

menubutton.onclick = function(){
    if(navigation.style.right == "-220px"){

        navigation.style.right = "0";
        menu.src = "Images/close.png";
       
    }

    else{
        navigation.style.right = "-220px";
        menu.src = "Images/menu.png";
    }
}