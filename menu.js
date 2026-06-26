/* ==========================
   menu.js - Part 5A
========================== */

/* Generate Top Menu */
function createTopMenu() {
   
    const row = document.getElementById("topMenu");

    row.innerHTML = "";

    topMenu.forEach(item => {

        row.innerHTML += `
        <a href="#"
           class="rect-btn"
           onclick="showGroup('${item.id}',this);return false;">

            <img src="${item.img}">
            <span>${item.text}</span>

        </a>
        `;

    });

}

/* Generate Circle Buttons */

function createCircleMenus(){

    for(const id in menuData){

        const box=document.getElementById(id);

        if(!box) continue;

        box.innerHTML="";

        menuData[id].forEach(item=>{

            box.innerHTML+=`

            <a href="#"

               class="circle-item"

               onclick="menuClick('${item.action}');return false;">

                <div class="circle">

                    <img src="${item.img}">

                </div>

                <span>${item.text}</span>

            </a>

            `;

        });

    }

}


/* Home */

function showHome(btn){
if(reportMode){

    backReportMenu();

}
    clearActive();

    if(btn) btn.classList.add("active");

    hideAllPages();

    document.getElementById("homeMessage").style.display="block";

    document.getElementById("langSelect").style.display="block";

}


/* Hide Everything */

function hideAllPages(){

    document.querySelectorAll(".circle-grid")

    .forEach(g=>g.style.display="none");

    document.getElementById("g4").style.display="none";

    document.getElementById("reportMenu").style.display="none";

    document.getElementById("homeMessage").style.display="none";

    document.getElementById("langSelect").style.display="none";

}


/* Remove Active */

function clearActive(){

document.querySelectorAll(".rect-btn,.nav-btn,.loan-tab-btn")

.forEach(btn=>btn.classList.remove("active"));

}


/* Open Group */

function showGroup(id,btn){
if(reportMode){

    backReportMenu();

}
clearActive();

if(btn) btn.classList.add("active");

hideAllPages();

if(id==="g4"){

document.getElementById("g4").style.display="block";

showLoanSection("g11",document.getElementById("loanBtn"));

}

else{

document.getElementById(id).style.display="grid";

}

}


/* Loan Section */

function showLoanSection(id,btn){

document.querySelectorAll(".loan-tab-btn")

.forEach(b=>b.classList.remove("active"));

if(btn) btn.classList.add("active");

const loan=document.getElementById("loanContent");

loan.innerHTML=document.getElementById(id).innerHTML;

loan.style.display="grid";

}


/* Side Menu */

function toggleMenu(){
if(reportMode){

    return;

}
document.getElementById("menu")

.classList.toggle("open");

}


/* Exit Popup */

function showExit(){

document.getElementById("menu")

.classList.remove("open");

const p=document.getElementById("popup");

p.innerHTML="Scroll from bottom to top to close App";

p.style.display="block";

setTimeout(()=>{

p.style.display="none";

},3000);

}


/* Default */

window.onload=function(){

createTopMenu();

createCircleMenus();

showHome(document.querySelector(".nav-btn"));

changeLanguage();

};
/* PART - B * /
/* =====================================
   REPORT MENU
===================================== */

let currentReportGroup = "";
let reportMode = false;

/* Open Report Menu */

function openReportMenu(groupId){

    reportMode = true;
    currentReportGroup = groupId;

    /* Hide current buttons */

    if(groupId=="g4"){

        document.getElementById("loanContent").style.display="none";

    }else{

        document.getElementById(groupId).style.display="none";

    }

    createReportButtons();

    document.getElementById("reportMenu").style.display="grid";

}


/* Create Report Buttons */

function createReportButtons(){

    const box=document.getElementById("reportMenu");

    box.innerHTML="";

    reportButtons.forEach(name=>{

        box.innerHTML+=`

        <button class="report-btn"

        onclick="reportButtonClick('${name}')">

        ${name}

        </button>

        `;

    });

}


/* Report Button Click */

function reportButtonClick(name){

    if(name==="Back"){

        backReportMenu();

        return;

    }

    alert(name);

}


/* Back */

function backReportMenu(){

    reportMode=false;

    document.getElementById("reportMenu").style.display="none";

    if(currentReportGroup==="g4"){

        document.getElementById("loanContent").style.display="grid";

    }

    else{

        document.getElementById(currentReportGroup).style.display="grid";

    }

}


/* Navigation Lock */

function menuClick(action){

    if(reportMode){

        return;
    }

    switch(action){

        /* Expenses */

        case "expenseReports":

        case "sensitiveExpense":

        case "allExpenseReports":

            openReportMenu("g1");

            break;


        /* Activities */

        case "activityReports":

        case "sensitiveActivity":

        case "allActivityReports":

            openReportMenu("g2");

            break;


        /* Health */

        case "healthReports":

        case "sensitiveHealth":

        case "allHealthReports":

            openReportMenu("g3");

            break;


        /* Memories */

        case "memoryReports":

        case "sensitiveMemory":

        case "allMemoryReports":

            openReportMenu("g5");

            break;


        /* Income */

        case "incomeReports":

        case "sensitiveIncome":

        case "allIncomeReports":

            openReportMenu("g10");

            break;


        /* Loans */

        case "loanReports":

        case "sensitiveLoan":

        case "allLoanReports":

            openReportMenu("g4");

            break;


        /* Payments */

        case "paymentReports":

        case "sensitivePayment":

        case "allPaymentReports":

            openReportMenu("g4");

            break;


        default:

            console.log(action);

    }

}
/* ==========================================
   menu.js - Part 5C
========================================== */


/* -------- Close Side Menu -------- */

function closeMenu(){

    document.getElementById("menu")
    .classList.remove("open");

}


/* -------- Popup -------- */

function showPopup(msg){

    const p=document.getElementById("popup");

    p.innerHTML=msg;

    p.style.display="block";

    clearTimeout(window.popupTimer);

    window.popupTimer=setTimeout(function(){

        p.style.display="none";

    },3000);

}


/* -------- Exit -------- */

function showExit(){

    closeMenu();

    showPopup(
        "Scroll from bottom to top to close App"
    );

}


/* -------- Click Outside Menu -------- */

document.addEventListener("click",function(e){

    const menu=document.getElementById("menu");

    const btn=document.querySelector(".menu-icon");

    if(

        menu.classList.contains("open")

        &&

        !menu.contains(e.target)

        &&

        !btn.contains(e.target)

    ){

        closeMenu();

    }

});


/* -------- ESC Key -------- */

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        if(reportMode){

            backReportMenu();

            return;

        }

        closeMenu();

    }

});


/* -------- Navigation Placeholder -------- */

function openPage(name){

    console.log("Open :",name);

}


/* -------- Common Menu Click -------- */

function menuClick(action){

    if(reportMode){

        return;

    }

    switch(action){

        default:

            openPage(action);

    }

}


/* -------- App Initialize -------- */

function initializeApp(){

    createTopMenu();

    createCircleMenus();

    changeLanguage();

    showHome(document.querySelector(".nav-btn"));

}


/* -------- Load -------- */

window.addEventListener("load",initializeApp);
