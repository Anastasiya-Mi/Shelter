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
        src:'../../assets/images/slide-jennifer.png',
        alt:'dog Jennifer',
        name:'Jennifer'
    },
    {
        src:'../../assets/images/slide-woody.png',
        alt:'dog Woody',
        name:'Woody'
    },
    {
        src:'../../assets/images/slide-sophia.png',
        alt:'dog Sophia',
        name:'Sophia'
    },
    {
        src:'../../assets/images/slide-scarlett.png',
        alt:'dog Scarlett',
        name:'Scarlett'
    },
    {
        src:'../../assets/images/slide-timmy.png',
        alt:'cat Timmy',
        name:'Timmy'
    },
    {
        src:'../../assets/images/slide-charly.png',
        alt:'dog Charly',
        name:'Charly'
    },
    {
        src:'../../assets/images/slide-freddie.png',
        alt:'cat Freddie',
        name:'Freddie'
    }
];

// 1. всегда получаем массив из 3 значений. Исключаем слайды на макете
let min = 3;
let max = cards.length;
let recievedIndex = [];
function random (min,max){    
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    return result;         
}
function getRandomIndexforSlider (){
    let randomIndexArr = [];
    let firstSlide = random(min,max);
    let secondSlide = random(min,max);
    let thirdSlide = random(min,max);
    while (firstSlide == secondSlide || firstSlide == thirdSlide || secondSlide == thirdSlide){
        secondSlide = random(min,max);
        thirdSlide = random(min,max);            
    }
    randomIndexArr.push(firstSlide);
    randomIndexArr.push(secondSlide);
    randomIndexArr.push(thirdSlide);
    return randomIndexArr;
}

recievedIndex = getRandomIndexforSlider ();
console.log(recievedIndex);
//  2. Записываем данные из массива Cards 
let cardFirstIndex = recievedIndex[0];
let cardSecondIndex = recievedIndex[1];
let cardThirdIndex = recievedIndex[2];

let firstCardValue = cards[cardFirstIndex];
let secondCardValue = cards[cardSecondIndex];
let thirdCardValue = cards[cardThirdIndex];

// 2. создаем HTML-элементы для наших карточек и присваиваем им значение.Добавляем в структуру нашей страницы
let slide = 0;

function createElemForWrap (value){
        let slideEmpty = document.createElement('div');
        slideEmpty.classList.add('card'); 
        let imgPet = document.createElement('img');
        let imgDescription = value.alt;
        let imgWay = value.src;
        imgPet.setAttribute("src",imgWay);
        imgPet.setAttribute("alt",imgDescription);
        let namePet = document.createElement('h3');
        namePet.innerHTML = value.name;
        let btnLearn = document.createElement('button');
        btnLearn.classList.add('learn_more');
        btnLearn.innerHTML = 'Learn more';
        namePet.innerHTML = value.name;
        slideEmpty.appendChild(imgPet);
        slideEmpty.appendChild(namePet);
        slideEmpty.appendChild(btnLearn);    
        return slideEmpty;      
    }

let firstCard = createElemForWrap(firstCardValue);
let secondCard = createElemForWrap(secondCardValue);
let thirdCard = createElemForWrap(thirdCardValue);
// console.log(firstCard,secondCard,thirdCard)

let showSlide = document.querySelector('.slider');
function addCurrentCard (slide){
        showSlide.appendChild(slide);//ничего не удаляем
}

addCurrentCard(firstCard);
addCurrentCard(secondCard);
addCurrentCard(thirdCard);
// 3. получаем новые данные для кнопок

function getNewRandomIndexArray(arr){
    min = 0;
    while (arr.length < 6){
    let num = random(min,max);
    while (isDuplucate(arr,num)){
        num = random(min,max);
    }
    arr.push(num);
}
let NewRandomIndexArray = arr.slice(3);
return NewRandomIndexArray;
}

function isDuplucate (arr,num){
    let duplicate = false;
   arr.forEach(index => {
    if (index === num){
        duplicate = true;
    }    
   });
   return duplicate;
}

let newArrForCard = [];


// 4. Привязываем событие к кнопкам и создаем новые карточки, удаляем старые

let btnPre = document.querySelector('button.arrow.left');
let btnNext = document.querySelector('button.arrow.right');

function clickOnBtn () {   
newArrForCard = getNewRandomIndexArray(recievedIndex);
console.log(newArrForCard);
let newCardFirstIndex = newArrForCard[0];
let newCardSecondIndex = newArrForCard[1];
let newCardThirdIndex = newArrForCard[2];
let newFirstCardValue = cards[newCardFirstIndex];
let newSecondCardValue = cards[newCardSecondIndex];
let newThirdCardValue = cards[newCardThirdIndex];
document.querySelectorAll('.card').forEach(element =>{
    element.remove();
});

let newFirstCard = createElemForWrap(newFirstCardValue);
let newSecondCard = createElemForWrap(newSecondCardValue);
let newThirdCard = createElemForWrap(newThirdCardValue);
addCurrentCard(newFirstCard);
addCurrentCard(newSecondCard);
addCurrentCard(newThirdCard);
recievedIndex = newArrForCard;
};

btnNext.addEventListener('click', clickOnBtn);
btnPre.addEventListener('click', clickOnBtn);

