/* =====================================

oneFaMiLe V1
Part 1A.3

===================================== */

/* WELCOME SCREEN */

const welcomePage =
document.getElementById("welcomePage");


/* LOGIN SCREEN */

const loginPage =
document.getElementById("loginPage");


/* OTP SCREEN */

const otpPage =
document.getElementById("otpPage");


/* DASHBOARD */

const dashboard =
document.getElementById("dashboard");


/* BUTTONS */

const loginBtn =
document.getElementById("loginBtn");

const signupBtn =
document.getElementById("signupBtn");

const sendOTPBtn =
document.getElementById("sendOTPBtn");

const verifyOTPBtn =
document.getElementById("verifyOTPBtn");

const backLoginBtn =
document.getElementById("backLoginBtn");

const backOTPBtn =
document.getElementById("backOTPBtn");


/* ======================

LOGIN

====================== */

loginBtn.onclick = ()=>{

welcomePage.classList.add("hidden");

loginPage.classList.remove("hidden");

};



/* ======================

SIGNUP

====================== */

signupBtn.onclick = ()=>{

welcomePage.classList.add(

"hidden"

);

signupPage.classList.remove(

"hidden"

);

};



/* ======================

BACK LOGIN

====================== */

backLoginBtn.onclick = ()=>{

loginPage.classList.add("hidden");

welcomePage.classList.remove("hidden");

};



/* ======================

SEND OTP

====================== */

sendOTPBtn.onclick = ()=>{

loginPage.classList.add("hidden");

otpPage.classList.remove("hidden");

};



/* ======================

BACK OTP

====================== */

backOTPBtn.onclick = ()=>{

otpPage.classList.add("hidden");

loginPage.classList.remove("hidden");

};



/* ======================

VERIFY OTP

====================== */

verifyOTPBtn.onclick = ()=>{

otpPage.classList.add("hidden");

dashboard.classList.remove("hidden");

};



/* ======================

END

====================== */
const signupPage =
document.getElementById(
"signupPage"
);

const signupOTPPage =
document.getElementById(
"signupOTPPage"
);

const signupOTPBtn =
document.getElementById(
"signupOTPBtn"
);

const signupVerifyBtn =
document.getElementById(
"signupVerifyBtn"
);

const registerBtn =
document.getElementById(
"registerBtn"
);

const backSignupBtn =
document.getElementById(
"backSignupBtn"
);

const backSignupOTPBtn =
document.getElementById(
"backSignupOTPBtn"
);
