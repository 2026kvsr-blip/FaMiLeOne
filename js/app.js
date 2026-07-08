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
const familyBtn =
document.getElementById("familyBtn");

const memoriesBtn =
document.getElementById("memoriesBtn");

const chartsBtn =
document.getElementById("chartsBtn");

const reportsBtn =
document.getElementById("reportsBtn");
activitiesBtn.onclick=()=>{

homeContent.innerHTML=`

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

"Activity Reports"

);

};
  
document.getElementById(
"activitySensitive"
).onclick=()=>{

reportsLayout(
"Activity Sensitive Reports"
);

};

document.getElementById(
"activityAll"
).onclick=()=>{

reportsLayout(
"Activity All Reports"
);

};
document.getElementById(

"activityBack"

).onclick=()=>{

homeContent.innerHTML=`

<h2>

HOME PAGE

</h2>

`;

};

};
incomeBtn.onclick=()=>{

homeContent.innerHTML=`

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

`;
document.getElementById(

"incomeReports"

).onclick=()=>{

reportsLayout(

"Income Reports"

);

};


document.getElementById(
"incomeSensitive"
).onclick=()=>{

reportsLayout(
"Income Sensitive Reports"
);

};

document.getElementById(
"incomeAll"
).onclick=()=>{

reportsLayout(
"Income All Reports"
);

};
  
document.getElementById(

"incomeBack"

).onclick=()=>{

homeContent.innerHTML=`

<h2>

HOME PAGE

</h2>

`;

};

};
healthBtn.onclick=()=>{

homeContent.innerHTML=`

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

`;

document.getElementById(
"healthReports"
).onclick=()=>{

reportsLayout(
"Health Reports"
);

};

document.getElementById(
"healthSensitive"
).onclick=()=>{

reportsLayout(
"Health Sensitive Reports"
);

};

document.getElementById(
"healthAll"
).onclick=()=>{

reportsLayout(
"Health All Reports"
);

};

document.getElementById(
"healthBack"
).onclick=()=>{

homeBtn.click();

};

};
loansBtn.onclick = ()=>{

homeContent.innerHTML = `
<h2 class="page-title">

Loans

</h2>
<div class="grid-2">

<button id="loanBtn" class="grid-btn">
Loans
</button>

<button id="paymentsBtn" class="grid-btn">
Payments
</button>

</div>

<div align="center">

<button id="loanBack"
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

<h2>

HOME PAGE

</h2>

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

homeContent.innerHTML=`

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

`;

document.getElementById(
"lendReports"
).onclick=()=>{

reportsLayout(
type + " - Lend Reports"
);

};

document.getElementById(
"lendSensitive"
).onclick=()=>{

reportsLayout(
type + " - Lend Sensitive Reports"
);

};

document.getElementById(
"lendAll"
).onclick=()=>{

reportsLayout(
type + " - Lend All Reports"
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

homeContent.innerHTML=`

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

`;

document.getElementById(
"borrowReports"
).onclick=()=>{

reportsLayout(
type + " - Borrowed Reports"
);

};

document.getElementById(
"borrowSensitive"
).onclick=()=>{

reportsLayout(
type + " - Borrowed Sensitive Reports"
);

};

document.getElementById(
"borrowAll"
).onclick=()=>{

reportsLayout(
type + " - Borrowed All Reports"
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
  homeBtn.classList.add(
"active"
);

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

`;
document.getElementById(

"expenseReports"

).onclick=()=>{

reportsLayout(

"Expense Reports"

);

};

document.getElementById(
"expenseSensitive"
).onclick=()=>{

reportsLayout(
"Expense Sensitive Reports"
);

};


document.getElementById(
"expenseAll"
).onclick=()=>{

reportsLayout(
"Expense All Reports"
);

};
document.getElementById(

"expenseBack"

)

.onclick=()=>{

homeContent.innerHTML=`

<h2>

HOME PAGE

</h2>

`;

};


};
homeBtn.onclick=()=>{

homeContent.innerHTML=`

<h2 class="page-title">

Home

</h2>

<h2>

HOME PAGE

</h2>

`;

};



familyBtn.onclick=()=>{

homeContent.innerHTML=`

<h2 class="page-title">

Family Tree

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

`;

document.getElementById(
"familyBack"
).onclick=()=>{

homeBtn.click();

};

};


memoriesBtn.onclick=()=>{

homeContent.innerHTML=`

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

`;
document.getElementById(
"memoryReports"
).onclick=()=>{

reportsLayout(
"Memory Reports"
);

};

document.getElementById(
"memorySensitive"
).onclick=()=>{

reportsLayout(
"Memory Sensitive Reports"
);

};

document.getElementById(
"memoryAll"
).onclick=()=>{

reportsLayout(
"Memory All Reports"
);

};
document.getElementById(
"memoryBack"
).onclick=()=>{

homeBtn.click();

};

};



chartsBtn.onclick=()=>{

homeContent.innerHTML=`

<h2 class="page-title">

Charts

</h2>

<div class="grid-3x2">

<button class="grid-btn">

Expenses Charts

</button>

<button class="grid-btn">

Activities Charts

</button>

<button class="grid-btn">

Income Charts

</button>

<button class="grid-btn">

Health Charts

</button>

<button class="grid-btn">

Memories Charts

</button>

<button class="grid-btn">

Loan - Lend Charts

</button>

<button class="grid-btn">

Loan - Borrowed Charts

</button>

<button class="grid-btn">

Payments - Lend Charts

</button>

<button class="grid-btn">

Payments - Borrowed Charts

</button>

<button class="grid-btn">

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

`;

document.getElementById(
"chartBack"
).onclick=()=>{

homeBtn.click();

};

};

reportsBtn.onclick=()=>{

homeContent.innerHTML=`

<h2 class="page-title">

Reports

</h2>

<div class="grid-3x2">

<button class="grid-btn">

Expenses Reports

</button>

<button class="grid-btn">

Activities Reports

</button>

<button class="grid-btn">

Loan Reports

</button>

<button class="grid-btn">

Income Reports

</button>

<button class="grid-btn">

Health Reports

</button>

<button class="grid-btn">

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

`;

document.getElementById(
"reportsBack"
).onclick=()=>{

homeBtn.click();

};

};

function reportsLayout(title){

homeContent.innerHTML=`

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

`;

document.getElementById(
"reportBack"
).onclick=()=>{

homeBtn.click();

};

}
