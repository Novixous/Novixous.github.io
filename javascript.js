
window.onresize = function () {
    Resize()
};
window.onscroll = function () {
    myFunction()
};
window.onload = function () {
    DefaultLogo()
};
var navbar = document.getElementById("navbar");
var webtitle = document.getElementById("title-image");
var sticky_pos = webtitle.height;
var small_logo = document.getElementById("smalllogo");
var navbutton = document.getElementById("MenuText");
var header = document.getElementById("header");
var title_image = document.getElementById("title-image");

function DefaultLogo() {
    if (document.documentElement.clientWidth > 1030) {
        title_image.src = "Resources/logo_410x.png";
        title_image.style.width = "400px";
    } else {
        title_image.src = "Resources/logo-small_112x.png";
        title_image.style.width = "60px";
        title_image.style.height = "30px";
    }
}

function Resize() {
    if (document.documentElement.clientWidth > 1030) {
        navbar.style.width = "100%";
        navbar.style.height = "auto";
        header.style.position = "relative";
        navbutton.style.fontSize = "0px";
        title_image.src = "Resources/logo_410x.png";
        title_image.style.width = "400px";
        title_image.style.height = "40px";
        if (document.documentElement.clientWidth < 1600) {
            small_logo.style.marginTop = "0px";
            small_logo.style.display = "none";
            if (window.pageYOffset >= sticky_pos) {
                navbar.style.overflow = "visible";
                navbar.classList.add("sticky");
            }
        } else {
            if (window.pageYOffset >= sticky_pos) {

                small_logo.style.marginTop = "25px";
                small_logo.style.display = "block";
            }
        }
    } else if (document.documentElement.clientWidth <= 1030) {

        navbar.style.overflow = "hidden";
        navbar.classList.remove("sticky");
        header.style.position = "fixed";
        header.style.width = "100%";
        header.style.zIndex = "6";
        navbutton.style.top = "50px";
        navbutton.style.position = "fixed";
        navbutton.style.zIndex = "9";
        navbutton.style.fontSize = "25px";
        title_image.src = "Resources/logo-small_112x.png";
        title_image.style.width = "60px";
        title_image.style.height = "30px";
        navbar.style.transition = "0s";
        navbar.style.width = "0";
        navbar.style.height = "100%";
        /*
        text-align: center;
        width: 3.5%;
        float: none;
        position: absolute;
        display: none;
        top: 11%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 7;*/
    }
}

function myFunction() {
    if (document.documentElement.clientWidth > 1030) {
        navbutton.style.fontSize = "0px";
        if (window.pageYOffset >= sticky_pos) {
            small_logo.style.marginTop = "25px";
            small_logo.style.display = "block";
            navbar.style.overflow = "visible";
            navbar.classList.add("sticky");

        } else {
            small_logo.style.marginTop = "0px";
            small_logo.style.display = "none";
            navbar.style.overflow = "hidden";
            navbar.classList.remove("sticky");

        }

    }
    if (document.documentElement.clientWidth < 1600) {
        small_logo.style.marginTop = "0px";
        small_logo.style.display = "none";
    }
    if (document.documentElement.clientWidth <= 1030) {
        navbutton.style.fontSize = "25px";
        if (window.pageYOffset >= sticky_pos) {
            navbutton.style.position = "fixed";
            navbutton.style.zIndex = "7";
            navbutton.style.top = "50px";
            header.style.position = "fixed";
            header.style.width = "100%";
            header.style.zIndex = "6";

        } else {
            navbutton.style.position = "realative";
            navbutton.style.zIndex = "7";
            navbutton.style.top = "50px";
        }
    }
}

function openNav() {
    navbar.style.transition = "0.5s";
    document.getElementById("navbar").style.width = "100%";
}

function closeNav() {
    navbar.style.transition = "0.5s";
    document.getElementById("navbar").style.width = "0%";
}
