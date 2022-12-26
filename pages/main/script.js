'use strict'
// ------------меню-бургер
var menuIcon = document.querySelector(".menu_burger");
var btnCheck = document.querySelector("#burger_menu");
var body = document.querySelector("body");
var closeWin = document.querySelector(".shadow");
var navMenu = document.querySelector(".menu");
var menuLink = document.querySelectorAll(".menu a");

btnCheck.addEventListener('click', function(){
if (btnCheck.checked){
    body.classList.toggle('push');
} else {
    body.classList.remove('push');
}
});

closeWin.onclick = function (event) {
    if (event.target == closeWin){
        btnCheck.checked = false;
        body.classList.remove('push');
    }  
}

navMenu.addEventListener ("click", function(event){
    if (event.target.closest(".menu a")){
        btnCheck.checked = false;
        body.classList.remove('push');  
    }
});

// // ----------- слайдер -------
let cards = [
    {
        src:'../../assets/images/slide-katrine.png',
        alt:'cat Katrine',
        name:'Katrine',
        id: 'zero',
        type: "Cat - British Shorthair",        
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: '6 months',
        inoculations: "panleukopenia",
        diseases: "none",
        parasites: "none"
    },
    {
        src:'../../assets/images/slide-jennifer.png',
        alt:'dog Jennifer',
        name:'Jennifer',
        id:'one',
        type:"Dog - Labrador",        
        description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age:'2 months',
        inoculations:"none",
        diseases:"none",
        parasites:"none"
    },
    {
        src:'../../assets/images/slide-woody.png',
        alt:'dog Woody',
        name:'Woody',
        id:'two',
        type: "Dog - Golden Retriever",    
        description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age:'3 years 6 months',
        inoculations:"adenovirus, distemper",
        diseases:"right back leg mobility reduced",
        parasites:"none"
    },
    {
        src:'../../assets/images/slide-sophia.png',
        alt:'dog Sophia',
        name:'Sophia',
        id:'three',
        type:"Dog - Shih tzu",        
        description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age:'1 month',
        inoculations:"parvovirus",
        diseases:"none",
        parasites:"none"
    },
    {
        src:'../../assets/images/slide-scarlett.png',
        alt:'dog Scarlett',
        name:'Scarlett',
        id:'four',
        type: "Dog - Jack Russell Terrier",        
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: '3 months',
        inoculations:"parainfluenza",
        diseases:"none",
        parasites:"none"
    },
    {
        src:'../../assets/images/slide-timmy.png',
        alt:'cat Timmy',
        name:'Timmy',
        id:'five',
        type:"Cat - British Shorthair",        
        description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age:'2 years 3 months',
        inoculations:"calicivirus, viral rhinotracheitis",
        diseases:"kidney stones",
        parasites:"none"
    },
    {
        src:'../../assets/images/slide-charly.png',
        alt:'dog Charly',
        name:'Charly',
        id:'six',
        type:"Dog - Jack Russell Terrier",        
        description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age:'8 years',
        inoculations:"bordetella bronchiseptica, leptospirosis",
        diseases:"deafness, blindness",
        parasites:"lice, fleas"
    },
    {
        src:'../../assets/images/slide-freddie.png',
        alt:'cat Freddie',
        name:'Freddie',
        id:'seven',
        type:"Cat - British Shorthair",        
        description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age:'2 months',
        inoculations:"rabies",
        diseases:"none",
        parasites:"none"
    }
];

// 1. получаем массив из 3 значений. Исключаем слайды на макете

let min = 3;
let max = cards.length;//8
let indexOfCurrentCards = [];

function random (min,max){    
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    return result;         
}
function getRandomIndexforSlider (min,max){
    let arr = [];
    for(let i=0;i<3;i++){
        let index = random(min,max);
        arr.push(index);
    }
    while (arr[0] == arr[1] || arr[0] == arr[2] || arr[1] == arr[2]){
        arr[1] = random(min,max);
        arr[2] = random(min,max);
    }    
    return arr;
}
indexOfCurrentCards = getRandomIndexforSlider (min,max);//получили массив


//  2. Записываем данные из массива Cards 

function getValue (arr,arr1){
    let emptyArr = [];
    for(let i=0;i<arr.length;i++){
        let index = arr[i];
        let dataCard = arr1[index];
        emptyArr.push(dataCard);
    }
    return emptyArr;
}

let visibleCards = getValue(indexOfCurrentCards,cards);

// 2. создаем HTML-элементы для наших карточек и присваиваем им значение.Добавляем в структуру нашей страницы

function createElemForCard (value){
        let slideEmpty = document.createElement('div');
        slideEmpty.classList.add('card');
        let divID = value.id;
        slideEmpty.id = divID;
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

function createCard (arr){
    let cardArr = [];
    for(let i=0;i<arr.length;i++){
        let card = createElemForCard(arr[i]);
        cardArr.push(card);
    }
    return cardArr;
}

let card = createCard(visibleCards);

function createCurrentCard (arr){
    let showSlide = document.createElement('div');
    showSlide.classList.add('slider');
    for(let i=0;i<arr.length;i++){
        let card1 = arr[i];
        showSlide.appendChild(card1);
    }
    return showSlide
}
let currentSlide = createCurrentCard(card);

// для вставки в конец
function insertElementAtTheEnd (value){
let divSlider = document.querySelector('.slider_wrap');
    divSlider.append(value);
}
insertElementAtTheEnd (currentSlide);

// для вставки в начало
function insertElementAtTheBegin (value){
    let divSlider = document.querySelector('.slider_wrap');
    // let divFirstChild = document.querySelector('.slider');
    divSlider.prepend(value);        
    }


// -------------------------

let currentCard = document.querySelectorAll('.card');
currentCard.forEach(element =>{    
    element.addEventListener('click',showModalWin);
})
// -----------------------------
// 3. получаем новые данные для слайдов

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

let hiddenSlider = [];

function createCardForClick(){
let newArrForCard = getNewRandomIndexArray(indexOfCurrentCards);
let secondValueForCards = getValue(newArrForCard,cards);
let hiddenCards = createCard(secondValueForCards);
hiddenSlider = createCurrentCard(hiddenCards);
indexOfCurrentCards = newArrForCard;
}

// 4. Привязываем событие к кнопкам и создаем новые карточки, удаляем старые

const BTN_LEFT = document.querySelector('button.arrow.left');
const BTN_RIGHT = document.querySelector('button.arrow.right');
const CAROUSEL = document.querySelector('.slider_wrap');

function moveLeft () {     
    createCardForClick();
    hiddenSlider.classList.add('left');
    insertElementAtTheBegin(hiddenSlider);
    CAROUSEL.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click',moveLeft);
    BTN_RIGHT.removeEventListener('click',moveRight);
};

function moveRight () {    
    createCardForClick();
    hiddenSlider.classList.add('right');
    insertElementAtTheEnd(hiddenSlider);
    CAROUSEL.classList.add('transition-right');
    BTN_LEFT.removeEventListener('click',moveLeft);
    BTN_RIGHT.removeEventListener('click',moveRight);
};

BTN_LEFT.addEventListener('click',moveLeft);
BTN_RIGHT.addEventListener('click',moveRight);

CAROUSEL.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left'){
        CAROUSEL.classList.remove('transition-left');
        let cardTemplate = document.querySelectorAll('.slider');
        cardTemplate[0].classList.remove('left');        
        cardTemplate[1].remove();
        let currentCard = document.querySelectorAll('.card');
        currentCard.forEach(element =>{    
        element.addEventListener('click',showModalWin);
        })
    } else{
        CAROUSEL.classList.remove('transition-right');
        let cardTemplate = document.querySelectorAll('.slider');
        cardTemplate[1].classList.remove('right');        
        cardTemplate[0].remove();        
        let currentCard = document.querySelectorAll('.card');
        currentCard.forEach(element =>{    
        element.addEventListener('click',showModalWin);
        })    
    }    
    BTN_LEFT.addEventListener('click',moveLeft);
    BTN_RIGHT.addEventListener('click',moveRight);
});



// -------------------- модальное окно ----------------

function showModalWin (event){  
    let needCard = event.currentTarget;      
    let idElem = needCard.id;    
    let currentCardIndex = 0;
    for(let i=0;i<cards.length;i++){
        if(cards[i].id == idElem){
            currentCardIndex = i;
        }        
    }    
    let modalWinCard = cards[currentCardIndex];    
    // document.querySelectorAll('.popup').forEach(element =>{
    //         element.remove();
    // });
    // document.querySelectorAll('.popup').remove();
    let showModalWinCard = createModalWin(modalWinCard);
    body.append(showModalWinCard);
    let modalWindow = document.querySelector('.popup');
    modalWindow.classList.toggle('active')
    body.classList.toggle('push');
    let modalWindowBody = document.querySelector('.popup_body');
    let btnClose = document.querySelector('.btn_modal_win');
    modalWindowBody.onclick = function(event){    
            if(event.target == modalWindowBody){
                body.classList.remove('push');
                modalWindow.classList.remove('active'); 
                document.querySelector('.popup').remove(); 
            }
}
btnClose.onclick = function(event){    
       if(event.currentTarget == btnClose){
        body.classList.remove('push');
        modalWindow.classList.remove('active');
        document.querySelector('.popup').remove(); 
    }
}
}


// -------------- модальное окно------------ собери конструктор-лего
 function createModalWin(value){
    let divPopup =document.createElement('div');
    divPopup.classList.add('popup');
    let divPopupContent = document.createElement('div');
    divPopupContent.classList.add('popup_content');
    let divPopupBody = document.createElement('div');   
    divPopupBody.classList.add('popup_body');
    let divPopupImg = document.createElement('div');
    divPopupImg.classList.add('popup_img');
    let imgPet = document.createElement('img');
    let imgDescription = value.alt;
    let imgWay = value.src;    
    imgPet.setAttribute("src",imgWay);
    imgPet.setAttribute("alt",imgDescription);
    divPopupImg.appendChild(imgPet);
    
    let divBtnModalWin = document.createElement('div');
    divBtnModalWin.classList.add('btn_modal_win');
    let imgCross = document.createElement('img');
    let imgCrossWay = '../../assets/icons/cross.svg';
    let imgCrossAlt = 'cross';
    imgCross.setAttribute("src",imgCrossWay);
    imgCross.setAttribute("alt",imgCrossAlt);
    divBtnModalWin.appendChild(imgCross);
    
    let divPopupText = document.createElement('div');
    divPopupText.classList.add('popup_text');
    let textH3 = document.createElement('h3');
    textH3.innerText = value.name;    
    let textH4 = document.createElement('h4');
    textH4.innerText = value.type;
    let textP = document.createElement('p');
    textP.innerText = value.description;
    let textUl = createList(value);   
    divPopupText.appendChild(textH3);
    divPopupText.appendChild(textH4);
    divPopupText.appendChild(textP);
    divPopupText.appendChild(textUl);

    divPopupContent.appendChild(divPopupImg);
    divPopupContent.appendChild(divBtnModalWin);
    divPopupContent.appendChild(divPopupText);

    divPopupBody.appendChild(divPopupContent);
    divPopup.appendChild(divPopupBody);
    return divPopup;
 };


function createList(value) {    
    let title = ['Age: ','Inoculations: ','Diseases: ','Parasites: '];
    let first = value.age;    
    let second = value.inoculations;
    let third = value.diseases;
    let four = value.parasites;        
    let titleValue = [first,second,third,four];   
    let Ul = document.createElement('ul');
        for(let i=0;i<4;i++){
        let strong = document.createElement('strong');
        let li = document.createElement('li');
        let span = document.createElement('span');        
        strong.append(title[i]);
        span.prepend(strong);
        span.append(titleValue[i])
        li.append(span);
        Ul.append(li);
    } 
    return Ul;    
       
};


