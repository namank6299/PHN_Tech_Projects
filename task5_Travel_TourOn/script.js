let menu = document.querySelector('.menu');
    menu.onclick = function () {
        let bottomNav = document.querySelector('.bottom-nav');
        bottomNav.classList.toggle('active');
        let navIcons = document.querySelector('.nav-icons');
        navIcons.classList.toggle('active');
        let navlist = document.querySelector('.nav-list');
        navlist.classList.toggle('active');
    }

    function loginform() {
        let loginform = document.querySelector('.login-form-container');
        if (loginform.style.display === "block") {
            loginform.style.display = "none";
        }
        else {
            loginform.style.display = "block";
        }
    }

    function Signupform() {
        let Signupform = document.querySelector('.signup-form-container');
        if (Signupform.style.display === "none") {
            Signupform.style.display = "block"
        }
        else {
            Signupform.style.display = "none";
        }
    }

    function signuptext() {
        let signupText = document.querySelector('.user-form-bottom-signup-text');
        if (signupText.style.display === "block") {
            signupText.style.display = "none"
        }
        else{
            signupText.style.display = "block";
        }
    }

    function loginText() {
        let loginText = document.querySelector('.user-form-bottom-login-text');
        if (loginText.style.display === "none") {
            loginText.style.display = "block"
        }
        else{
            loginText.style.display = "none";
        }
    }