/* =====================================

oneFaMiLe V1
Part 1.1C

===================================== */

/* LOGIN */


const loginBtn =
document.getElementById("loginBtn");

const signupBtn =
document.getElementById("signupBtn");

const loginArea =
document.getElementById("loginArea");

const signupArea =
document.getElementById("signupArea");


loginBtn.addEventListener(

"click",

() => {

loginArea.classList.remove(

"hidden"

);

signupArea.classList.add(

"hidden"

);

}

);



signupBtn.addEventListener(

"click",

() => {

signupArea.classList.remove(

"hidden"

);

loginArea.classList.add(

"hidden"

);

}

);



/* ======================

MENU

====================== */

const menuBtn =

document.querySelector(

".menu-btn"

);


const menuPanel =

document.getElementById(

"menuPanel"

);



menuBtn.addEventListener(

"click",

() => {

menuPanel.classList.toggle(

"hidden"

);

}

);



/* ======================

EXIT

====================== */


const exitBtn =

document.getElementById(

"exitBtn"

);


const exitMessage =

document.getElementById(

"exitMessage"

);



exitBtn.addEventListener(

"click",

() => {


menuPanel.classList.add(

"hidden"

);


exitMessage.classList.remove(

"hidden"

);



setTimeout(

() => {

exitMessage.classList.add(

"hidden"

);

},

3000

);


}

);



/* ======================

BOTTOM BUTTONS


====================== */

const bottomButtons =

document.querySelectorAll(

".bottom-btn"

);



bottomButtons.forEach(

(button)=>{


button.addEventListener(

"click",

()=>{


bottomButtons.forEach(

b =>

b.classList.remove(

"active"

)

);


button.classList.add(

"active"

);


});


});



/* ======================

TOP BUTTONS

====================== */


const moduleButtons =

document.querySelectorAll(

".module-btn"

);



moduleButtons.forEach(

(button)=>{


button.addEventListener(

"click",

()=>{


moduleButtons.forEach(

b =>

b.classList.remove(

"active"

)

);


button.classList.add(

"active"

);


});


});



/* ======================

LANGUAGE

====================== */


const lang =

document.getElementById(

"lang"

);



lang.addEventListener(

"change",

function(){


const selected =

this.value;


console.log(

"Language : " +

selected

);


});
const homeBtn =
document.getElementById("homeBtn");

const familyBtn =
document.getElementById("familyBtn");

const memoriesBtn =
document.getElementById("memoriesBtn");

const chartsBtn =
document.getElementById("chartsBtn");

const reportsBtn =
document.getElementById("reportsBtn");

const homePage =
document.getElementById("homePage");

const familyPage =
document.getElementById("familyPage");

const memoriesPage =
document.getElementById("memoriesPage");

const chartsPage =
document.getElementById("chartsPage");

const reportsPage =
document.getElementById("reportsPage");
const topContainer =
document.getElementById("topContainer");
const bottomContainer =
document.getElementById(
"bottomContainer"
);
const verifyOTPBtn =
document.getElementById(
"verifyOTPBtn"
);
const welcomeBox =
document.getElementById(
"welcomeBox"
);
const languageArea =
document.getElementById("languageArea");
function hidePages(){

homePage.classList.add("hidden");

familyPage.classList.add("hidden");

memoriesPage.classList.add("hidden");

chartsPage.classList.add("hidden");

reportsPage.classList.add("hidden");

}
function clearBottom(){

bottomButtons.forEach(

b=>{

b.classList.remove(

"active"

);

}

);

}
topContainer.classList.add(
"hidden"
);

bottomContainer.classList.add(
"hidden"
);
homeBtn.onclick = ()=>{

hidePages();

clearBottom();

homeBtn.classList.add(

"active"

);

homePage.classList.remove(

"hidden"

);

topContainer.classList.remove(

"hidden"

);

languageArea.classList.remove(

"hidden"

);

}
familyBtn.onclick=()=>{

hidePages();

clearBottom();

familyBtn.classList.add(

"active"

);

familyPage.classList.remove(

"hidden"

);

topContainer.classList.add(

"hidden"

);

languageArea.classList.add(

"hidden"

);

}
memoriesBtn.onclick=()=>{

hidePages();

clearBottom();

memoriesBtn.classList.add(

"active"

);

memoriesPage.classList.remove(

"hidden"

);

topContainer.classList.add(

"hidden"

);

languageArea.classList.add(

"hidden"

);

}
chartsBtn.onclick=()=>{

hidePages();

clearBottom();

chartsBtn.classList.add(

"active"

);

chartsPage.classList.remove(

"hidden"

);

topContainer.classList.add(

"hidden"

);

languageArea.classList.add(

"hidden"

);

}
reportsBtn.onclick=()=>{

hidePages();

clearBottom();

reportsBtn.classList.add(

"active"

);

reportsPage.classList.remove(

"hidden"

);

topContainer.classList.add(

"hidden"

);

languageArea.classList.add(

"hidden"

);

}
homeBtn.click();

/* ======================

HOME DEFAULT

====================== */


document.querySelector(

".bottom-btn"

)

.classList.add(

"active"

);




/* ======================

PLACEHOLDER PAGES

====================== */


/* ======================

TOP BUTTON PLACEHOLDER

====================== */

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



expensesBtn.onclick=()=>{


moduleButtons.forEach(

b=>{

b.classList.remove(

"active"

);

}

);


expensesBtn.classList.add(

"active"

);



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

id="backExpense"

class="back-btn">

← Back

</button>

</div>

`;



document.getElementById(

"backExpense"

)

.onclick=()=>{


homeContent.innerHTML=

"<h2>Home</h2>";


expensesBtn.classList.remove(

"active"

);


};


};


const bottomContainer =
document.getElementById(
"bottomContainer"
);
verifyOTPBtn.onclick = ()=>{

welcomeBox.classList.add("hidden");

loginArea.classList.add("hidden");

signupArea.classList.add("hidden");

topContainer.classList.remove("hidden");

bottomContainer.classList.remove("hidden");

languageArea.classList.remove("hidden");

homeBtn.click();

};
loginBtn.onclick = ()=>{

loginArea.classList.remove("hidden");

signupArea.classList.add("hidden");

};

signupBtn.onclick = ()=>{

signupArea.classList.remove("hidden");

loginArea.classList.add("hidden");

};
/* ======================

END

====================== */
