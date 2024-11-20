//this is for hamburger-menu
hanburger = document.querySelector(".hamburger-menu");
hanburger.onclick = function () {
    navlist = document.querySelector(".navlist");
    navlist.classList.toggle("active");
    hamburger = document.querySelector('.hamburger-menu');
    hanburger.classList.toggle("cross");
    //cross_hamburger = document.querySelector(".hamburger-close")
    //cross_hamburger.classList.toggle("active");
}

//the following javascript show the navigation bar by clicking on hamburger menu
function show() {
    let button = document.getElementsByClassName('menu');
    let menulist = document.getElementById('navlist');
    if (navlist.style.display != 'none') {
        navlist.style.display = 'none'
    }
    else {
        navlist.style.display = "block"
    }
}

//the following script is for alternate change in buttons background
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-142px";
    }
    prevScrollpos = currentScrollPos;
}

function show() {
    let button = document.getElementsByClassName('menu');
    let menulist = document.getElementById('navlist');
    if (navlist.style.display != 'none') {
        navlist.style.display = 'none'
    }
    else {
        navlist.style.display = "block"
    }
}

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
function mouseOver() {
    document.getElementById("btn1").style.backgroundColor = "orangered";
    document.getElementById("btn2").style.backgroundColor = "transparent";
}
function mouseOut() {
    document.getElementById("btn1").style.backgroundColor = "transparent";
    document.getElementById("btn2").style.backgroundColor = "orangered";
}