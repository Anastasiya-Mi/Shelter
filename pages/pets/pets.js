'use strict'
// ------------меню-бургер
var menuIcon = document.querySelector(".menu_burger");
var btnCheck = document.querySelector("#burger_menu");
var body = document.querySelector("body");
var closeWin = document.querySelector(".shadow");
var navMenu = document.querySelector(".menu");
var menuLink = document.querySelectorAll(".menu a");

const BTN_DBL_LEFT = document.querySelector('.double_left');
const BTN_LEFT = document.querySelector('.left');
const BTN_DBL_RIGHT = document.querySelector('.double_right');
const BTN_RIGHT = document.querySelector('.right');
const COUNT_PAGE = document.querySelector('.number');
const CAROUSEL = document.querySelector('.slide_wrap');

btnCheck.addEventListener('click', function(){
if (btnCheck.checked){
    body.classList.toggle('push');
    closeWin.classList.toggle('push')
} else {
    body.classList.remove('push');
    closeWin.classList.toggle('push')
}
});

closeWin.onclick = function (event) {
    if (event.target == closeWin){
        btnCheck.checked = false;
        body.classList.remove('push');
        closeWin.classList.toggle('push')
    }  
}

navMenu.addEventListener ("click", function(event){
    if (event.target.closest(".menu a")){
        btnCheck.checked = false;
        body.classList.remove('push'); 
        closeWin.classList.toggle('push') 
    }
});


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

// для восьми карточек
function shake (){   
    let arr = [0,1,2,3,4,5,6,7]; 
    for(let i = arr.length-1;i>0;i--){
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i+1));
        arr[i] =arr[rnd];
        arr[rnd] = tmp;        
    }    
    return arr;
}

let arrForEight = [];

for(let i=1;i<7;i++){
   let newArr = shake();    
   arrForEight.push(newArr);    
}
// console.log (arrForEight,'для 8 карт');

// рандом общий

let min = 0;
let max = 8;

function random (min,max){    
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    return result;         
}

// для шести карточек
let emptyArr = [];
function getSixNumbers(array){    
    while (array.length < 6){
    let num = random(min,max);
    while (isDuplucate(array,num)){
        num = random(min,max);
    }
    array.push(num);
}
return array;
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

function getNumber(array){    
    let newPart = [];
    for(let i =0;i<array.length;i++){        
        let num = array[i] + 1;
        if(num > 7){
            num = 0;
        }        
        newPart.push(num)
    }
    return  newPart;
}  

let arrSix = getSixNumbers(emptyArr);
// console.log(arrSix, 'сформировали');

let arrForSix = [];

function getSixCard (array){
let arr1 = getNumber(array);
arrForSix.push(array);
arrForSix.push(arr1);
for(let i =0;i<6;i++){
    let arr2 = getNumber(arr1);         
    arrForSix.push(arr2); 
    arr1 = arr2;   
} 
}

getSixCard (arrSix)
// console.log(arrForSix,'для 6 карт');


// для трех карточек
let emptyArr2 = [];

function getThreeNumbers(array){    
    while (array.length < 3){
    let num = random(min,max);
    while (isDuplucate(array,num)){
        num = random(min,max);
    }
    array.push(num);
}
return array;
}
let arrThree = getThreeNumbers(emptyArr2);
// console.log(arrThree, 'сформировали')

let arrForThree = [];

function getThreeCard (array){
    let arr1 = getNumber(array);
    arrForThree.push(array);
    arrForThree.push(arr1);
    for(let i =0;i<14;i++){
        let arr2 = getNumber(arr1);         
        arrForThree.push(arr2); 
        arr1 = arr2;   
    } 
    }

 getThreeCard (arrThree)
    
//  размер окна
 let currentSize = window.innerWidth;
 let size = 0;

function getSize (num){
    let sizeWin = 0;
    if(num < 767.9){
        sizeWin = "small";
        return sizeWin;        
    } else if (num >=768 && num < 1279.9) {
        sizeWin = "medium"; 
        return sizeWin; 
        } else {
            sizeWin = "hight";
            return sizeWin;
}
} 
size = getSize(currentSize);

// счетчик
let count = 1;

function getPageNumber(num){
    let length = currentArr.length;
    let numberPage = COUNT_PAGE.innerHTML;    
    let page = Number(numberPage);
    if(length === 6){
        
    }
}

function trackSize(){
    let deviceWidth = window.innerWidth;    
    let size2 = getSize (deviceWidth);   
    let slide = document.querySelector('.slider');
    if(size2 != size){
        if(size2 === "small"){
            slide.remove();
            showContent(size2);
            size = size2;
            console.log(size);
            console.log(currentArr)
        } else if(size2 === "medium"){
            slide.remove();
            showContent(size2);

            size = size2;
            console.log(size);
            console.log(currentArr)
        } else{
            slide.remove();
            showContent(size2);
            size = "hight";
            console.log(size);
            console.log(currentArr)

        }
    }
}
 window.addEventListener('resize',trackSize);
// ссылка на нужный нам массив и отображение 1 страницы

function createSlide (value){
    let PageData =getValue(value,cards);   
    let createPage = createCard(PageData); 
    let currentSlide = createCurrentCard(createPage);    
    insertElementAtTheEnd (currentSlide);
}

 let currentArr = [];

function showContent(num){
    if(num === "small"){
        currentArr =  arrForThree;
        let currIndex = count-1;        
        let firstPageValue = currentArr[currIndex];
        createSlide(firstPageValue);
        let currentCardPet = document.querySelectorAll('.card');       
        currentCardPet.forEach(element =>{    
        element.addEventListener('click',showModalWin);
})     
}else if(num === "medium"){
    currentArr =  arrForSix;
    let arrLength = currentArr.length-1;
    if(count >= arrLength){
        count = 8;
        let page = document.querySelector('.number');
        page.innerHTML = count;      
     }
    let currIndex = count-1;        
    let firstPageValue = currentArr[currIndex];
    createSlide(firstPageValue);    
    let currentCardPet = document.querySelectorAll('.card');       
        currentCardPet.forEach(element =>{    
        element.addEventListener('click',showModalWin);
    })             
} else{
     currentArr = arrForEight;
     console.log(currentArr);     
     let arrLength = currentArr.length-1;
     if(count >= arrLength){
        count = 6;
       let page = document.querySelector('.number');
       page.innerHTML = count;      
     }
     let currIndex = count-1;        
     let firstPageValue = currentArr[currIndex];
     createSlide(firstPageValue);
    let currentCardPet = document.querySelectorAll('.card');       
    currentCardPet.forEach(element =>{    
    element.addEventListener('click',showModalWin);
    })
    }
    getArrLength();
}

function getValue (arr,arr1){
    let emptyArr = [];
    for(let i=0;i<arr.length;i++){
        let index = arr[i];
        let dataCard = arr1[index];
        emptyArr.push(dataCard);
    }
    return emptyArr;
}

showContent(size)

// Cоздаем HTML-элементы для наших карточек и присваиваем им значение.Добавляем в структуру нашей страницы

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

function createCurrentCard (arr){
    let showSlide = document.createElement('div');
    showSlide.classList.add('slider');
    for(let i=0;i<arr.length;i++){
        let card1 = arr[i];
        showSlide.appendChild(card1);
    }
    return showSlide
}

// для вставки в конец
function insertElementAtTheEnd (value){
    let divSlider = document.querySelector('.slide_wrap');
        divSlider.appendChild(value);
    }

    
    // для вставки в начало
    function insertElementAtTheBegin (value){
        let divSlider = document.querySelector('.slide_wrap');        
        divSlider.prepend(value);        
        }



//  кнопки

   

   
    let startValue = 0;


    function moveRight(){ 
        count = count+1;  
        startValue =count-1;   
        // startValue =startValue+1;
        let newPage = currentArr[startValue];
        // count = count+1;
        COUNT_PAGE.innerHTML = count;        
        createSlide (newPage);
        let slider = document.querySelectorAll('.slider');
        let hiddenSlider = slider[1];
        hiddenSlider.classList.add('right');
        CAROUSEL.classList.add('transition-right');
        BTN_DBL_LEFT.removeEventListener('click',startOfThePages);
        BTN_DBL_RIGHT.removeEventListener('click',endOfThePages); 
        BTN_RIGHT.removeEventListener('click',moveRight);
        BTN_LEFT.addEventListener('click',moveLeft);

    }

    function moveLeft(){   
        count = count-1;  
        startValue =count-1;     
        // startValue =startValue-1;
        let newPage = currentArr[startValue];
        // count = count-1;
        COUNT_PAGE.innerHTML = count;        
        createSlide (newPage);
         let slider = document.querySelectorAll('.slider');
         let hiddenSlider = slider[1];
         hiddenSlider.classList.add('left');
         CAROUSEL.classList.add('transition-left');
         BTN_DBL_LEFT.removeEventListener('click',startOfThePages);
         BTN_DBL_RIGHT.removeEventListener('click',endOfThePages); 
         BTN_RIGHT.removeEventListener('click',moveRight);
         BTN_LEFT.addEventListener('click',moveLeft);
 
     }
   
    BTN_RIGHT.addEventListener('click',moveRight);
    BTN_LEFT.addEventListener('click',moveLeft);    

 function endOfThePages (){
    startValue = currentArr.length-1
    count = startValue+1;
    let lastPage = currentArr[startValue];
    COUNT_PAGE.innerHTML =  startValue+1;
    createSlide (lastPage);
    let slider = document.querySelectorAll('.slider');
    let hiddenSlider = slider[1];
    hiddenSlider.classList.add('right');
    CAROUSEL.classList.add('transition-right');
    BTN_DBL_LEFT.removeEventListener('click',startOfThePages);
    BTN_DBL_RIGHT.removeEventListener('click',endOfThePages); 
 }
                    
function startOfThePages(){
    startValue = 0;
    count = 1;
    let startPage = currentArr[startValue];    
    COUNT_PAGE.innerHTML = startValue+1;    
    createSlide (startPage);
    let slider = document.querySelectorAll('.slider');
    let hiddenSlider = slider[0];
    hiddenSlider.classList.add('left');
    CAROUSEL.classList.add('transition-left');
    BTN_DBL_LEFT.removeEventListener('click',startOfThePages);
    BTN_DBL_RIGHT.removeEventListener('click',endOfThePages);
}

CAROUSEL.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left'){
        CAROUSEL.classList.remove('transition-left');
        let cardTemplate = document.querySelectorAll('.slider');
        cardTemplate[1].classList.remove('left');        
        cardTemplate[0].remove();
        let currentCardPet = document.querySelectorAll('.card');
        currentCardPet.forEach(element =>{    
        element.addEventListener('click',showModalWin);
        })            
    } else{
        CAROUSEL.classList.remove('transition-right');
        let cardTemplate = document.querySelectorAll('.slider');
        cardTemplate[1].classList.remove('right');        
        cardTemplate[0].remove(); 
        currentCardPet  = document.querySelectorAll('.card');
        currentCardPet.forEach(element =>{    
        element.addEventListener('click',showModalWin);
        })             
    } 
    
    BTN_DBL_LEFT.addEventListener('click',startOfThePages);
    BTN_DBL_RIGHT.addEventListener('click',endOfThePages);

    BTN_RIGHT.addEventListener('click',moveRight);
    BTN_LEFT.addEventListener('click',moveLeft);
    getArrLength();

    
    
});

BTN_DBL_RIGHT.addEventListener('click',endOfThePages);
BTN_DBL_LEFT.addEventListener('click',startOfThePages);

// проверка длины массива

function getArrLength(){
    let length = currentArr.length;
    let numberPage = COUNT_PAGE.innerHTML;    
    let page = Number(numberPage);

    if(page > 1){
        BTN_DBL_LEFT.removeAttribute("disabled");
        BTN_LEFT.removeAttribute("disabled");   
        BTN_DBL_LEFT.classList.add('btn');
        BTN_LEFT.classList.add('btn');      
    }
    if (page === 1){
        BTN_DBL_LEFT.setAttribute("disabled", "true");
        BTN_LEFT.setAttribute("disabled", "true");
        BTN_DBL_LEFT.classList.remove('btn');
        BTN_LEFT.classList.remove('btn');
    }

    if(length === 16){
        if (page === 16){
            BTN_DBL_RIGHT.setAttribute("disabled", "true");
            BTN_RIGHT.setAttribute("disabled", "true");
            BTN_DBL_RIGHT.classList.remove('btn');
            BTN_RIGHT.classList.remove('btn');
        } 
        if(page < 16){
            BTN_DBL_RIGHT.removeAttribute("disabled");
            BTN_RIGHT.removeAttribute("disabled");
            BTN_DBL_RIGHT.classList.add('btn');
            BTN_RIGHT.classList.add('btn'); 
            }
    }
    if(length === 8){
        if (page === 8){
            BTN_DBL_RIGHT.setAttribute("disabled", "true");
            BTN_RIGHT.setAttribute("disabled", "true");
            BTN_DBL_RIGHT.classList.remove('btn');
            BTN_RIGHT.classList.remove('btn');
        } 
        if(page < 8){
            BTN_DBL_RIGHT.removeAttribute("disabled");
            BTN_RIGHT.removeAttribute("disabled");
            BTN_DBL_RIGHT.classList.add('btn');
            BTN_RIGHT.classList.add('btn'); 
            }

    }
    if(length === 6){
        if (page === 6){
            BTN_DBL_RIGHT.setAttribute("disabled", "true");
            BTN_RIGHT.setAttribute("disabled", "true");
            BTN_DBL_RIGHT.classList.remove('btn');
            BTN_RIGHT.classList.remove('btn');
        } 
        if(page < 6){
            BTN_DBL_RIGHT.removeAttribute("disabled");
            BTN_RIGHT.removeAttribute("disabled");
            BTN_DBL_RIGHT.classList.add('btn');
            BTN_RIGHT.classList.add('btn'); 
            }

    }
}


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


let currentCardPet = document.querySelectorAll('.card');       
currentCardPet.forEach(element =>{    
element.addEventListener('click',showModalWin);
})



































































// let visibleCards = getValue(indexOfCurrentCards,cards);
// let visibleCards2 = getValue(indexOfCurrentCards,cards);
// let visibleCards3 = getValue(indexOfCurrentCards,cards);

// // 2. создаем HTML-элементы для наших карточек и присваиваем им значение.Добавляем в структуру нашей страницы

// function createElemForCard (value){
//         let slideEmpty = document.createElement('div');
//         slideEmpty.classList.add('card');
//         let divID = value.id;
//         slideEmpty.id = divID;
//         let imgPet = document.createElement('img');
//         let imgDescription = value.alt;
//         let imgWay = value.src;
//         imgPet.setAttribute("src",imgWay);
//         imgPet.setAttribute("alt",imgDescription);
//         let namePet = document.createElement('h3');
//         namePet.innerHTML = value.name;
//         let btnLearn = document.createElement('button');
//         btnLearn.classList.add('learn_more');
//         btnLearn.innerHTML = 'Learn more';
//         namePet.innerHTML = value.name;
//         slideEmpty.appendChild(imgPet);
//         slideEmpty.appendChild(namePet);
//         slideEmpty.appendChild(btnLearn);    
//         return slideEmpty;      
//     }

// function createCard (arr){
//     let cardArr = [];
//     for(let i=0;i<arr.length;i++){
//         let card = createElemForCard(arr[i]);
//         cardArr.push(card);
//     }
//     return cardArr;
// }

// let card = createCard(visibleCards);
// let card2 = createCard(visibleCards2);
// let card3 = createCard(visibleCards3);

// function createCurrentCard (arr){
//     let showSlide = document.createElement('div');
//     showSlide.classList.add('slider');
//     for(let i=0;i<arr.length;i++){
//         let card1 = arr[i];
//         showSlide.appendChild(card1);
//     }
//     return showSlide
// }
// let currentSlide = createCurrentCard(card);
// console.log(currentSlide);
// let currentSlide2 = createCurrentCard(card2);
// console.log(currentSlide2);
// let currentSlide3 = createCurrentCard(card3);


// // для вставки в конец
// function insertElementAtTheEnd (value){
// let divSlider = document.querySelector('.slide_wrap');
//     divSlider.append(value);
// }
// let Width = window.innerWidth;
// console.log(Width)
// if(Width < 767){
//     insertElementAtTheEnd (currentSlide);
//     // let deviceWidth = window.innerWidth;
//     console.log(Width)
//     } else if (Width >=768 && Width < 1280) {
//         // console.log(deviceWidth, '2')
//         insertElementAtTheEnd (currentSlide);
//         insertElementAtTheEnd (currentSlide2);
//         console.log(Width, '2')
//     } else {
//         console.log(Width, '3')
//         insertElementAtTheEnd (currentSlide);
//         insertElementAtTheEnd (currentSlide2);
//         insertElementAtTheEnd (currentSlide3);
//     }




