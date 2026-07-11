/* =====================================

oneFaMiLe V1
Part 1A.3

===================================== */


/* WELCOME SCREEN */

const welcomeHeading=
document.getElementById("welcomeHeading");
const homeWelcomeHeading =
document.getElementById("homeWelcomeHeading");

const homeWelcomeSlogan =
document.getElementById("homeWelcomeSlogan");

const homeWelcomeAbout =
document.getElementById("homeWelcomeAbout");

const welcomeSlogan=
document.getElementById("welcomeSlogan");

const welcomeAbout=
document.getElementById("welcomeAbout");

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
const familyBtn =
document.getElementById("familyBtn");

const memoriesBtn =
document.getElementById("memoriesBtn");

const chartsBtn =
document.getElementById("chartsBtn");

const reportsBtn =
document.getElementById("reportsBtn");
const languageSelect =
document.getElementById("languageSelect");
languageSelect.onchange = function(){

    updateWelcomePage();

    if(!dashboard.classList.contains("hidden")){

        homeBtn.click();

    }

};
function updateWelcomePage(){

    const txt = languageData[languageSelect.value];

    // Login Welcome Page
    welcomeHeading.innerHTML = txt.welcome;
    welcomeSlogan.innerHTML = txt.slogan.join("<br>");
    welcomeAbout.innerHTML = txt.about;

    // Home Welcome Page
    if(homeWelcomeHeading){

        homeWelcomeHeading.innerHTML = txt.welcome;
        homeWelcomeSlogan.innerHTML = txt.slogan.join("<br>");
        homeWelcomeAbout.innerHTML = txt.about;

    }

}
function showPage(html){

    homeContent.scrollTop = 0;

    window.scrollTo(0,0);

    homeContent.innerHTML = html;

}
function setActiveButton(btn){

document.querySelectorAll(
".top-container button, .bottom-container button"
).forEach(button=>{

button.classList.remove("active");

const img = button.querySelector("img");

if(img){

img.src = img.dataset.normal;

}

});

btn.classList.add("active");

const activeImg = btn.querySelector("img");

if(activeImg){

activeImg.src = activeImg.dataset.active;

}

}

activitiesBtn.onclick=()=>{
setActiveButton(activitiesBtn);
  
showPage(`

<h2 class="page-title">

Activities

</h2>
<div class="grid-3x2">

<button class="grid-btn">

Add Activity

</button>

<button
id="activityReports"
class="grid-btn">

Reports

</button>

<button
id="activitySensitive"
class="grid-btn">

Sensitive Reports

</button>

<button
id="activityAll"
class="grid-btn">

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
id="activityBack"
class="back-btn">

← Back

</button>

</div>

`;
document.getElementById(

"activityReports"

).onclick=()=>{

reportsLayout(

"Activities Reports"

);

};
  
document.getElementById("activitySensitive").onclick=()=>{

openSensitive(
"Activities",
"Sensitive Reports"
);

};

document.getElementById("activityAll").onclick=()=>{

openSensitive(
"Activities",
"All Reports"
);

};
  
document.getElementById(

"activityBack"

).onclick=()=>{

showPage(`

homeBtn.click();


`);

};

};
incomeBtn.onclick=()=>{

setActiveButton(incomeBtn);
  
showPage(`

<h2 class="page-title">

Income

</h2>
<div class="grid-3x2">

<button class="grid-btn">

Add Income

</button>

<button
id="incomeReports"
class="grid-btn">

Reports

</button>

<button
id="incomeSensitive"
class="grid-btn">

Sensitive Reports

</button>

<button
id="incomeAll"
class="grid-btn">

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
id="incomeBack"
class="back-btn">

← Back

</button>

</div>

`);
document.getElementById(

"incomeReports"

).onclick=()=>{

reportsLayout(

"Income Reports"

);

};


document.getElementById("incomeSensitive").onclick=()=>{

openSensitive(
"Income",
"Sensitive Reports"
);

};

document.getElementById("incomeAll").onclick=()=>{

openSensitive(
"Income",
"All Reports"
);

};


  
document.getElementById(

"incomeBack"

).onclick=()=>{

showPage(`

homeBtn.click();


`);

};

};
healthBtn.onclick=()=>{
setActiveButton(healthBtn);
  
showPage(`

<h2 class="page-title">
Health
</h2>

<div class="grid-3x2">

<button class="grid-btn">
Add Health
</button>

<button
id="healthReports"
class="grid-btn">
Reports
</button>

<button
id="healthSensitive"
class="grid-btn">
Sensitive Reports
</button>

<button
id="healthAll"
class="grid-btn">
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
id="healthBack"
class="back-btn">

← Back

</button>

</div>

`);

document.getElementById(
"healthReports"
).onclick=()=>{

reportsLayout(
"Health Reports"
);

};

document.getElementById("healthSensitive").onclick=()=>{

openSensitive(
"Health",
"Sensitive Reports"
);

};

document.getElementById("healthAll").onclick=()=>{

openSensitive(
"Health",
"All Reports"
);

};

  
document.getElementById(
"healthBack"
).onclick=()=>{

homeBtn.click();

};

};
loansBtn.onclick = ()=>{
setActiveButton(loansBtn);
homeContent.innerHTML = `

<h2 class="page-title">

Loans

</h2>

<div class="grid-2">

<button id="loanBtn" class="grid-btn">

<img
src="images/Loans.png"
class="btn-icon">

<span>

Loans

</span>

</button>

<button id="paymentsBtn" class="grid-btn">

<img
src="images/Payments.png"
class="btn-icon">

<span>

Payments

</span>

</button>

</div>

<div align="center">

<button
id="loanBack"
class="back-btn">

← Back

</button>

</div>

`;

document.getElementById(
"loanBtn"
).onclick=()=>{

showLendBorrow("Loan");

};

document.getElementById(
"paymentsBtn"
).onclick=()=>{

showLendBorrow("Payments");

};

document.getElementById(
"loanBack"
).onclick = ()=>{

homeContent.innerHTML = `

homeBtn.click();


`;

};

};


function showLendBorrow(type){

homeContent.innerHTML = `

<h2 class="page-title">

${type}

</h2>

<div class="grid-2">

<button id="lendBtn"
class="grid-btn">

Lend

</button>

<button id="borrowBtn"
class="grid-btn">

Borrowed

</button>

</div>

<div align="center">

<button id="lendBorrowBack"
class="back-btn">

← Back

</button>

</div>

`;

document.getElementById(
"lendBorrowBack"
).onclick = ()=>{

loansBtn.click();

};

document.getElementById(
"lendBtn"
).onclick=()=>{

showPage(`

<h2 class="page-title">

${type} - Lend

</h2>

<div class="grid-3x2">

<button class="grid-btn">

Add Lend

</button>

<button
id="lendReports"
class="grid-btn">

Reports

</button>

<button
id="lendSensitive"
class="grid-btn">

Sensitive Reports

</button>

<button
id="lendAll"
class="grid-btn">

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
id="lendBack"
class="back-btn">

← Back

</button>

</div>

`);

document.getElementById(
"lendReports"
).onclick=()=>{

reportsLayout(
type + " - Lend Reports"
);

};

document.getElementById("lendSensitive").onclick=()=>{

openSensitive(
type + " - Lend",
"Sensitive Reports"
);

};

document.getElementById("lendAll").onclick=()=>{

openSensitive(
type + " - Lend",
"All Reports"
);

};

document.getElementById(
"lendBack"
).onclick=()=>{

showLendBorrow(type);

};

};

document.getElementById(
"borrowBtn"
).onclick=()=>{

showPage(`

<h2 class="page-title">

${type} - Borrowed

</h2>

<div class="grid-3x2">

<button class="grid-btn">

Add Borrowed

</button>

<button
id="borrowReports"
class="grid-btn">

Reports

</button>

<button
id="borrowSensitive"
class="grid-btn">

Sensitive Reports

</button>

<button
id="borrowAll"
class="grid-btn">

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
id="borrowBack"
class="back-btn">

← Back

</button>

</div>

`);

document.getElementById(
"borrowReports"
).onclick=()=>{

reportsLayout(
type + " - Borrowed Reports"
);

};

document.getElementById("borrowSensitive").onclick=()=>{

openSensitive(
type + " - Borrowed",
"Sensitive Reports"
);

};

document.getElementById("borrowAll").onclick=()=>{

openSensitive(
type + " - Borrowed",
"All Reports"
);

};

  
document.getElementById(
"borrowBack"
).onclick=()=>{

showLendBorrow(type);

};

};
}
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

loginPage.classList.add("hidden");

welcomePage.classList.add("hidden");

dashboard.classList.remove("hidden");
 homeBtn.click();

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
setActiveButton(expensesBtn);
    homeContent.scrollTop=0;
showPage(`
<h2 class="page-title">

Expenses

</h2>

<div class="grid-3x2">

<button class="grid-btn">

Add Expense

</button>


<button
id="expenseReports"
class="grid-btn">

Reports

</button>


<button
id="expenseSensitive"
class="grid-btn">

Sensitive Reports

</button>


<button
id="expenseAll"
class="grid-btn">

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

`);
document.getElementById(

"expenseReports"

).onclick=()=>{

reportsLayout(

"Expenses Reports"

);

};


document.getElementById("expenseSensitive").onclick = ()=>{

    openSensitive("Expenses","Sensitive Reports");

};

document.getElementById("expenseAll").onclick = ()=>{

    openSensitive("Expenses","All Reports");

};

  
  
document.getElementById(

"expenseBack"

)

.onclick=()=>{

showPage(`


homeBtn.click();


`);

};


};
homeBtn.onclick = ()=>{

    setActiveButton(homeBtn);

    updateWelcomePage();
homeContent.style.display="block";
    homeContent.scrollTop=0;
};
familyBtn.onclick=()=>{
setActiveButton(familyBtn);
  homeContent.scrollTop=0;
showPage(`

<h2 class="page-title">

Family

</h2>

<div class="grid-3x2">

<button class="grid-btn">

Add Member

</button>

<button class="grid-btn">

Add Family Tree

</button>

<button class="grid-btn">

Search Member

</button>

<button class="grid-btn">

Relations

</button>

<button class="grid-btn">

Tree View

</button>

<button class="grid-btn">

About

</button>

</div>

<div align="center">

<button
id="familyBack"
class="back-btn">

← Back

</button>

</div>

`);

document.getElementById(
"familyBack"
).onclick=()=>{

homeBtn.click();

};

};


memoriesBtn.onclick=()=>{
setActiveButton(memoriesBtn);
 homeContent.scrollTop=0; 
showPage(`

<h2 class="page-title">

Memories

</h2>

<div class="grid-3x2">

<button class="grid-btn">

Add New Memory

</button>

<button
id="memoryReports"
class="grid-btn">

Reports

</button>

<button
id="memorySensitive"
class="grid-btn">

Sensitive Reports

</button>

<button
id="memoryAll"
class="grid-btn">

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
id="memoryBack"
class="back-btn">

← Back

</button>

</div>

`);
document.getElementById(
"memoryReports"
).onclick=()=>{

reportsLayout(
"Memories Reports"
);

};

document.getElementById("memorySensitive").onclick=()=>{

openSensitive(
"Memories",
"Sensitive Reports"
);

};

document.getElementById("memoryAll").onclick=()=>{

openSensitive(
"Memories",
"All Reports"
);

};
  
document.getElementById(
"memoryBack"
).onclick=()=>{

homeBtn.click();

};

};



chartsBtn.onclick=()=>{
setActiveButton(chartsBtn);
 homeContent.scrollTop=0; 
showPage(`

<h2 class="page-title">

Charts

</h2>

<div class="grid-3x2">

<button class="grid-btn chart-btn">
Expenses Charts
</button>

<button class="grid-btn chart-btn">Activities Charts</button>

<button class="grid-btn chart-btn">Income Charts</button>

<button class="grid-btn chart-btn">

Health Charts

</button>

<button class="grid-btn chart-btn">

Memories Charts

</button>

<button class="grid-btn chart-btn">

Loan-Lend Charts

</button>

<button class="grid-btn chart-btn">

Loan - Borrowed Charts

</button>

<button class="grid-btn chart-btn">

Payments- Lend Charts

</button>

<button class="grid-btn chart-btn">

Payments- Borrowed Charts

</button>

<button class="grid-btn chart-about-btn">

About

</button>

</div>

<div align="center">

<button
id="chartBack"
class="back-btn">

← Back

</button>

</div>

`);

document.getElementById(
"chartBack"
).onclick=()=>{

homeBtn.click();

};

};

reportsBtn.onclick=()=>{
setActiveButton(reportsBtn);
homeContent.scrollTop=0;  
showPage(`

<h2 class="page-title">

Reports

</h2>

<div class="grid-3x2">

<button id="expenseMainReports" class="grid-btn">
Expenses Reports
</button>

<button id="activityMainReports" class="grid-btn">
Activities Reports
</button>

<button id="loanMainReports" class="grid-btn">
Loan Reports
</button>

<button id="incomeMainReports" class="grid-btn">
Income Reports
</button>

<button id="healthMainReports" class="grid-btn">
Health Reports
</button>

<button id="memoryMainReports" class="grid-btn">
Memories Reports
</button>

<button class="grid-btn">
About
</button>

</div>
<div align="center">

<button
id="reportsBack"
class="back-btn">

← Back

</button>

</div>

`);
document.getElementById("expenseMainReports").onclick=()=>{

reportCategory("Expenses");

};

document.getElementById("activityMainReports").onclick=()=>{

reportCategory("Activities");

};

document.getElementById("loanMainReports").onclick=()=>{

loanReportsMenu();

};

document.getElementById("incomeMainReports").onclick=()=>{

reportCategory("Income");

};

document.getElementById("healthMainReports").onclick=()=>{

reportCategory("Health");

};

document.getElementById("memoryMainReports").onclick=()=>{

reportCategory("Memories");

};
document.getElementById(
"reportsBack"
).onclick=()=>{

homeBtn.click();

};

};

function reportsLayout(title){

showPage(`

<h2 class="page-title">

${title}

</h2>

<div class="report-grid">

<button class="report-btn">

Today

</button>

<button class="report-btn">

This Week

</button>

<button class="report-btn">

This Month

</button>

<button class="report-btn">

This Year

</button>

<button class="report-btn">

Daily

</button>

<button class="report-btn">

Weekly

</button>

<button class="report-btn">

Monthly

</button>

<button class="report-btn">

Yearly

</button>

<button class="report-btn">

Abstract

</button>

</div>

<div align="center">

<button
id="reportBack"
class="back-btn">

← Back

</button>

</div>

`);

document.getElementById(
"reportBack"
).onclick=()=>{

homeBtn.click();

};

}

function openSensitive(moduleName, reportType){

showPage(`

<h2 class="page-title">

${moduleName}

</h2>

<h3 style="text-align:center;color:#2A6EB0;">

${reportType}

</h3>

<input
id="passCode"
type="password"
placeholder="Enter Sensitive Pass Code"
style="
width:90%;
height:50px;
margin:20px auto;
display:block;
border-radius:10px;
padding-left:15px;
font-size:16px;
">

<div align="center">

<button
id="verifyPass"
class="grid-btn">

Verify

</button>

<br><br>

<button
id="passBack"
class="back-btn">

← Back

</button>

</div>

`);

document.getElementById("verifyPass").onclick=()=>{

const pass=document.getElementById("passCode").value;

if(pass==="123456"){

reportsLayout(moduleName+" - "+reportType);

}else{

alert("Wrong Sensitive Pass Code");

}

};

document.getElementById("passBack").onclick=()=>{

homeBtn.click();

};

}

function reportCategory(module){

showPage(`

<h2 class="page-title">

${module} Reports

</h2>

<div class="grid-3x2">

<button
id="catReports"
class="grid-btn">

Reports

</button>

<button
id="catSensitive"
class="grid-btn">

Sensitive Reports

</button>

<button
id="catAll"
class="grid-btn">

All Reports

</button>

</div>

<div align="center">

<button
id="catBack"
class="back-btn">

← Back

</button>

</div>

`);

document.getElementById("catReports").onclick=()=>{

reportsLayout(module+" Reports");

};

document.getElementById("catSensitive").onclick=()=>{

openSensitive(module,"Sensitive Reports");

};

document.getElementById("catAll").onclick=()=>{

openSensitive(module,"All Reports");

};

document.getElementById("catBack").onclick=()=>{

reportsBtn.click();

};

}


function loanReportsMenu(){

showPage(`

<h2 class="page-title">

Loan Reports

</h2>

<div class="grid-2">

<button id="loanLendRpt" class="grid-btn">
Loan - Lend Reports
</button>

<button id="loanBorrowRpt" class="grid-btn">
Loan - Borrowed Reports
</button>

<button id="paymentLendRpt" class="grid-btn">
Payments - Lend Reports
</button>

<button id="paymentBorrowRpt" class="grid-btn">
Payments - Borrowed Reports
</button>

</div>

<div align="center">

<button
id="loanRptBack"
class="back-btn">

← Back

</button>

</div>

`);

document.getElementById("loanLendRpt").onclick=()=>{

reportCategory("Loan - Lend");

};

document.getElementById("loanBorrowRpt").onclick=()=>{

reportCategory("Loan - Borrowed");

};

document.getElementById("paymentLendRpt").onclick=()=>{

reportCategory("Payments - Lend");

};

document.getElementById("paymentBorrowRpt").onclick=()=>{

reportCategory("Payments - Borrowed");

};

document.getElementById("loanRptBack").onclick=()=>{

reportsBtn.click();

};
   
}
 updateWelcomePage();
