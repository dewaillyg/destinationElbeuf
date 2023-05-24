const barre = document.querySelectorAll('.barre');
const menu = document.getElementsByClassName('menu');
const nav = document.getElementsByTagName('nav');
var bool = false;

const open = () => {
    barre[0].style.transform = 'rotate(45deg)';
    barre[0].style.top = '7px';
    barre[1].style.background = 'transparent';
    barre[2].style.transform = 'rotate(-45deg)';
    barre[2].style.top = '-7px';
    nav[0].style.left = '0%';
    bool = !bool;
}

const close = () => {
    barre[0].style.transform = 'rotate(0)';
    barre[0].style.top = '0px';
    barre[1].style.background = 'black';
    barre[2].style.transform = 'rotate(0deg)';
    barre[2].style.top = '0px';
    nav[0].style.left = '-30%';
    bool = !bool;
}

menu[0].addEventListener('click', function() {
    if (!bool) {
        open();
    } else {
        close();
    }
});