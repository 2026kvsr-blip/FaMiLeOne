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
const signupPage =
document.getElementById("signupPage");

const signupOTPPage =
document.getElementById("signupOTPPage");

const signupOTPBtn =
document.getElementById("signupOTPBtn");

const registerBtn =
document.getElementById("registerBtn");

const backSignupBtn =
document.getElementById("backSignupBtn");

const backSignupOTPBtn =
document.getElementById("backSignupOTPBtn");

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
const homeContent =
document.getElementById(
"homeContent"
);


const expensesBtn =
document.getElementById(
"expensesBtn"
);


const activitiesBtn =
document.getElementById(
"activitiesBtn"
);


const loansBtn =
document.getElementById(
"loansBtn"
);


const incomeBtn =
document.getElementById(
"incomeBtn"
);


const healthBtn =
document.getElementById(
"healthBtn"
);


const homeBtn =
document.getElementById(
"homeBtn"
);

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

welcomePage.classList.add("hidden");

signupPage.classList.remove("hidden");

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

backSignupBtn.onclick = ()=>{

signupPage.classList.add("hidden");

welcomePage.classList.remove("hidden");

};
signupOTPBtn.onclick = ()=>{

signupPage.classList.add("hidden");

signupOTPPage.classList.remove("hidden");

};
/* ======================

BACK OTP

====================== */

backOTPBtn.onclick = ()=>{

otpPage.classList.add("hidden");

loginPage.classList.remove("hidden");

};
backSignupOTPBtn.onclick = ()=>{

signupOTPPage.classList.add("hidden");

signupPage.classList.remove("hidden");

};


/* ======================

VERIFY OTP

====================== */

verifyOTPBtn.onclick = ()=>{

otpPage.classList.add("hidden");

welcomePage.classList.add("hidden");

dashboard.classList.remove("hidden");

};


/* ======================

END

====================== */


registerBtn.onclick = ()=>{

alert("Registration Successful");

signupOTPPage.classList.add("hidden");

signupPage.classList.add("hidden");

welcomePage.classList.remove("hidden");

};
expensesBtn.onclick=()=>{

homeContent.innerHTML=`

<div class="grid-3x2">

<button class="grid-btn">

Add Expense

</button>


<button class="grid-btn">

Reports

</button>


<button class="grid-btn">

Sensitive Reports

</button>


<button class="grid-btn">

All Reports

</button>


<button class="grid-btn">

Custom Search

</button>


<button class="grid-btn">

About

</button>

</div>


<div align="center">

<button
id="expenseBack"

class="back-btn">

← Back

</button>

</div>

`;


document.getElementById(

"expenseBack"

)

.onclick=()=>{

homeContent.innerHTML=

"HOME PAGE";

};


};
