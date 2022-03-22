let btn = document.querySelectorAll(".process_number");
let number = 0;


if (document.title == 'Miopane') {
    var imgSrc = ['./image/Miopane/description/1.png', './image/Miopane/description/2.png', './image/Miopane/description/3.png'];
} else if (document.title == '甜報') {
    var imgSrc = ['./image/sweet/description-1.png', './image/sweet/description-2.png'];
}

btn.forEach((item, index) => {
    item.addEventListener("click", change_image => {
        document.querySelector('#process_image').src = imgSrc[index];
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.color = '#828282';
            btn[i].addEventListener("mouseenter", () => {
                btn[i].style.color = '#BDBDBD';
            })
            btn[i].addEventListener("mouseleave", () => {
                if (i == index) {
                    btn[i].style.color = '#F8F8F8';
                } else {
                    btn[i].style.color = '#828282';
                }
            })
        }
        btn[index].style.color = '#F8F8F8';
        let number = index;
        console.log(number)
    });
});

// hovering= #BDBDBD 原來＝#F8F8F8 暗＝#828282

let goHome = document.querySelectorAll('.goHome');
let leaveBox = document.querySelector('#leave');
let next = document.querySelector('#next');

goHome.forEach((element) => {
    element.addEventListener('click', function leave() {
        leaveBox.style.backgroundColor = "#FFF8F1";
        leaveBox.style.animation = 'leave 0.5s forwards';
        setTimeout(() => { document.location.href = element.getAttribute('data-href'); }, 500)
        leaveBox.style.top = '100vh';
    });
})

next.addEventListener('click', function leave() {
    leaveBox.style.backgroundColor = next.getAttribute('data-color');;
    leaveBox.style.animation = 'leave 0.5s forwards';
    setTimeout(() => { document.location.href = next.getAttribute('data-href'); }, 500)
    leaveBox.style.top = '100vh';
});

function enter() {
    document.querySelector('#enter').style.animation = 'enter 0.8s forwards';
}

function goTop() {
    document.querySelector('body').scrollIntoView({
        behavior: 'smooth'
    })
}


// menu click //

let openMenu = document.querySelectorAll('.icons-img > img');
let iconsImg = document.querySelectorAll('.icons-img');
let menu = document.querySelectorAll('.icons-text');
let closeBtn = document.querySelectorAll('.menuClose');

openMenu.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (window.innerWidth < 500) {
            iconsImg[index].style.zIndex = '10';
            document.querySelector('.go-top').style.zIndex = '-1';
            menu[index].style.right = '-20px';
            //menu[index].style.animation = 'menuIn 0.3s forwards';
        }
    })
})

closeBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (window.innerWidth < 500) {
            menu[index].style.right = 'calc( -20px - 100vw)';
            //menu[index].style.animation = 'menuOut 0.3s forwards';
            setTimeout(() => {
                iconsImg[index].style.zIndex = '2';
                document.querySelector('.go-top').style.zIndex = '1';
            }, 300);
        }
    })
})

// video play // 

let video = document.querySelectorAll('video');

video.forEach((element) => {
    element.play();
    element.loop = true;
})