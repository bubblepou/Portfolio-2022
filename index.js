// ! Circular text ! //

// Math.PI / 180 = 1度
const angleToRadian = (angle) =>{
    return angle * (Math.PI / 180);
};

var radius = 280;
var diameter = radius * 2;

const circle = document.querySelector('#circle-text');
circle.style.width = `${diameter}px`;
circle.style.height = `${diameter}px`;

const text = circle.innerText;
const characters = text.split('');
circle.innerText = null;

let angle = -90;
const deltAngle = 360 / characters.length;

function makeCircle(radius){
    characters.forEach((char,index) => {
    const charElement = document.createElement('span');
    charElement.innerText = char;

    const xPos = radius * (1+Math.cos(angleToRadian(angle)));
    const yPos = radius * (1+Math.sin(angleToRadian(angle)));

    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${index * deltAngle}deg)`;
    charElement.style.transform = `${transform} ${rotate}`;
    
    angle += deltAngle;
    circle.appendChild(charElement);
    });
}

change_Circle_Size()

// RWD //

function change_Circle_Size(){
    circle.innerText = null;
    let windowWidth = window.innerWidth;
    console.log('windowWidth',windowWidth)
    if (windowWidth > 1100){
        var radius = 280;
    }else if (windowWidth <= 1100 && windowWidth > 1000){
        var radius = 250;
    }else if (windowWidth <= 1000 && windowWidth > 825){
        var radius = 210;
    }else if (windowWidth <= 825 && windowWidth > 620){
        var radius = 180;
    }else if (windowWidth <= 620){
        var radius = 140;
    };
    var diameter = radius * 2;
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    makeCircle(radius);
}

window.addEventListener("resize", change_Circle_Size);


// light box //

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

// enter and leave //

let works = document.querySelectorAll('.work');
let leaveBox = document.querySelector('#leave');

leaveBox.style.top = '100vh';

works.forEach( (element) =>{
    element.addEventListener('click', function leave(){
        leaveBox.style.backgroundColor = element.getAttribute('data-color');
        leaveBox.style.animation = 'leave 0.5s forwards';
        setTimeout(()=>{document.location.href=element.getAttribute('data-href');},500);
        //setTimeout(() => { leaveBox.style.animation = 'none'; }, 600);
        //leaveBox.style.top = '100vh';
        setTimeout(()=>{
            document.querySelector('#enter').style.top = '100vh';
            document.querySelector('#title').style.width = '100%';
            document.querySelector('.two-navigations').style.opacity = '1';
            document.querySelector('.circle-Box').style.opacity = '1';
            document.querySelector('#vertical-line').style.height = '100%';
        },600)
    });
    element.addEventListener('mouseenter', ()=>{
        if (window.innerWidth > 500){
            document.querySelector('body').style.backgroundColor = element.getAttribute('data-color');
        }
    });
    element.addEventListener('mouseleave', ()=>{
        document.querySelector('body').style.backgroundColor = '#FFF8F1';
    });
})

function enter(){
    let windowWidth = window.innerWidth;
    if (windowWidth > 700){
        document.querySelector('#enter').style.animation = 'enter 0.8s forwards';
        document.querySelector('#title').style.animation = 'typing 0.8s step-start 0.8s forwards';
        document.querySelector('.two-navigations').style.animation = 'opacityAni 0.8s ease-in 1.6s forwards';
        document.querySelector('.circle-Box').style.animation = 'opacityAni 0.8s ease-in 2.4s forwards';
        document.querySelector('#vertical-line').style.animation = 'line-down 0.5s linear 3s forwards';
    } else {
        document.querySelector('#enter').style.animation = 'enter 0.8s forwards';
        document.querySelector('.circle-Box').style.animation = 'opacityAni 0.8s ease-in 0.8s forwards';
        document.querySelector('#title').style.animation = 'typing 0.8s step-start 1.6s forwards';
        document.querySelector('.two-navigations').style.animation = 'opacityAni 0.8s ease-in 2.4s forwards';
        document.querySelector('#vertical-line').style.animation = 'line-down 0.5s linear 3s forwards';
    }
}


// navigation-scroll //

let toItem = document.querySelectorAll('.scrollTo');
let clickItem = document.querySelectorAll('.hover-line');

clickItem.forEach(
    (item,index) => {
        item.addEventListener('click',()=>{
            if (index > 0){
                toItem[index-1].scrollIntoView({
                    behavior: 'smooth'
                })
            }else{
                toItem[0].scrollIntoView({
                    behavior: 'smooth'
                })
            }
        })
    }
)

function goTop(){
    document.querySelector('body').scrollIntoView({
        behavior: 'smooth'
    })
}