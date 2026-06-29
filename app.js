/* =====================================================
   oneFaMiLe V4
   APP.JS
===================================================== */

"use strict";

/* =====================================================
   GLOBAL VARIABLES
===================================================== */

let currentModule = "expenses";

let currentMenu = "home";

let currentReport = "";

let currentUser = null;

let isLoggedIn = false;


/* =====================================================
   ELEMENTS
===================================================== */

const splashScreen = document.getElementById("splashScreen");

const welcomeScreen = document.getElementById("welcomeScreen");

const loginScreen = document.getElementById("loginScreen");

const otpScreen = document.getElementById("otpScreen");

const appContainer = document.getElementById("appContainer");

const loadingScreen = document.getElementById("loadingScreen");

const pageTitle = document.getElementById("pageTitle");


/* =====================================================
   APP START
===================================================== */

window.addEventListener("load", initializeApp);


/* =====================================================
   INITIALIZE
===================================================== */

function initializeApp(){

    showSplash();

}


/* =====================================================
   SPLASH
===================================================== */

function showSplash(){

    splashScreen.style.display = "flex";

    welcomeScreen.style.display = "none";

    loginScreen.style.display = "none";

    otpScreen.style.display = "none";

    appContainer.style.display = "none";

    setTimeout(showWelcome,2500);

}


/* =====================================================
   WELCOME
===================================================== */

function showWelcome(){

    splashScreen.style.display = "none";

    welcomeScreen.style.display = "flex";

}


/* =====================================================
   LOGIN
===================================================== */

function openLogin(){

    welcomeScreen.style.display = "none";

    loginScreen.style.display = "flex";

}


/* =====================================================
   SIGN UP
===================================================== */

function openSignUp(){

    alert("Sign Up Screen");

}


/* =====================================================
   LOGIN BACK
===================================================== */

function loginBack(){

    loginScreen.style.display = "none";

    welcomeScreen.style.display = "flex";

}


/* =====================================================
   OTP SCREEN
===================================================== */

function sendOTP(){

    const phone = document
        .getElementById("phoneNumber")
        .value
        .trim();

    if(phone.length !== 10){

        showPopup(
            "Login",
            "Please enter a valid 10 digit mobile number."
        );

        return;

    }

    loginScreen.style.display = "none";

    otpScreen.style.display = "flex";

}


/* =====================================================
   VERIFY OTP
===================================================== */

function verifyOTP(){

    const otp = document
        .getElementById("otpNumber")
        .value
        .trim();

    if(otp.length !== 6){

        showPopup(
            "OTP",
            "Please enter the 6 digit OTP."
        );

        return;

    }

    isLoggedIn = true;

    otpScreen.style.display = "none";

    openHome();

}


/* =====================================================
   RESEND OTP
===================================================== */

function resendOTP(){

    showPopup(
        "OTP",
        "OTP has been sent again."
    );

}


/* =====================================================
   HOME
===================================================== */

function openHome(){

    appContainer.style.display = "block";

    pageTitle.textContent = "Home";

}


/* =====================================================
   PAGE TITLE
===================================================== */

function setPageTitle(title){

    pageTitle.textContent = title;

}


/* =====================================================
   LOADING
===================================================== */

function showLoading(){

    loadingScreen.style.display = "flex";

}

function hideLoading(){

    loadingScreen.style.display = "none";

}


/* =====================================================
   EVENT LISTENERS
===================================================== */

document
.getElementById("loginButton")
.addEventListener("click", openLogin);


document
.getElementById("signupButton")
.addEventListener("click", openSignUp);


document
.getElementById("loginBackBtn")
.addEventListener("click", loginBack);


document
.getElementById("sendOtpBtn")
.addEventListener("click", sendOTP);


document
.getElementById("verifyOtpBtn")
.addEventListener("click", verifyOTP);


document
.getElementById("resendOtpBtn")
.addEventListener("click", resendOTP);

