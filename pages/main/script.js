'use strict'
var menuIcon = document.querySelector(".menu_burger");
var btnCheck = document.querySelector("#burger_menu");
var menuBody = document.querySelector("body");
var closeWin = document.querySelector(".shadow");
var navMenu = document.querySelector(".menu");
var menuLink = document.querySelectorAll(".menu a");

btnCheck.addEventListener('click', function(){
if (btnCheck.checked){
    menuBody.classList.toggle('push');
} else {
    menuBody.classList.remove('push');
}
});

closeWin.onclick = function (event) {
    if (event.target == closeWin){
        btnCheck.checked = false;
        menuBody.classList.remove('push');
    }  
}

navMenu.addEventListener ("click", function(event){
    if (event.target.closest(".menu a")){
        btnCheck.checked = false;
        menuBody.classList.remove('push');  
    }
});

// // ----------- слайдер -------
let cards = [
    {
        src:'../../assets/images/slide-katrine.png',
        alt:'cat Katrine',
        name:'Katrine'
    },
    {
        src:'.../../assets/images/slide-jennifer.png',
        alt:'dog Jennifer',
        name:'Jennifer'
    },
    {
        src:'.../../assets/images/slide-woody.png',
        alt:'dog Woody',
        name:'Woody'
    },
    {
        src:'.../../assets/images/slide-sophia.png',
        alt:'dog Sophia',
        name:'Sophia'
    },
    {
        src:'.../../assets/images/slide-scarlett.png',
        alt:'dog Scarlett',
        name:'Scarlett'
    },
    {
        src:'.../../assets/images/slide-timmy.png',
        alt:'cat Timmy',
        name:'Timmy'
    },
    {
        src:'.../../assets/images/slide-charly.png',
        alt:'dog Charly',
        name:'Charly'
    },
    {
        src:'.../../assets/images/slide-freddie.png',
        alt:'cat Freddie',
        name:'Freddie'
    }
];

