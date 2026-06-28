/* ==========================================
   reports.js - Part 4A
========================================== */

let reportMode = false;
let currentReportGroup = "";
let currentReportTitle = "";
let currentStatus = "";


/* ===========================
   OPEN REPORT MENU
=========================== */

function openReportMenu(groupId,title){

    reportMode = true;

    currentReportGroup = groupId;
    currentReportTitle = title;

    /* Hide current menu */

    if(groupId==="g4"){

        document.getElementById("loanContent").style.display="none";

    }else{

        document.getElementById(groupId).style.display="none";

    }

    /* Heading */

    document.getElementById("reportTitle").innerHTML=title;

    document.getElementById("reportHeader").style.display="block";

    /* Disable Loan Tabs */

    const loanBtn=document.getElementById("loanBtn");
    const paymentBtn=document.getElementById("paymentBtn");

    if(loanBtn) loanBtn.disabled=true;
    if(paymentBtn) paymentBtn.disabled=true;

    /* Hide Report Menu */

    document.getElementById("reportMenu").style.display="none";

    /* Show Status Menu */

    document.getElementById("statusMenu").style.display="grid";

}


/* ===========================
   STATUS BUTTON CLICK
=========================== */

function statusButtonClick(status){

    currentStatus=status;

    /* Hide Status Menu */

    document.getElementById("statusMenu").style.display="none";

    /* Change Heading */

    document.getElementById("reportTitle").innerHTML=

        currentReportTitle +

        "<br><span style='font-size:16px;color:#666;'>"

        + status +

        "</span>";

    /* Show Report Buttons */

    createReportButtons();

    document.getElementById("reportMenu").style.display="grid";


/* ==========================================
   reports.js - Part 4B
========================================== */


/* ===========================
   CREATE REPORT BUTTONS
=========================== */

function createReportButtons(){

    const box=document.getElementById("reportMenu");

    if(!box) return;

    box.innerHTML="";

    reportButtons.forEach(name=>{

        const cls=(name==="Back")
            ? "report-btn back-btn"
            : "report-btn";

        box.innerHTML+=`

        <button
            class="${cls}"
            onclick="reportButtonClick('${name}')">

            ${name}

        </button>

        `;

    });

}


/* ===========================
   REPORT BUTTON CLICK
=========================== */

function reportButtonClick(name){

    if(name==="Back"){

        backReportMenu();

        return;

    }

    showPopup(name);

}


/* ===========================
   BACK
   (Report Buttons -> Status Menu)
=========================== */

function backReportMenu(){

    /* Hide Report Buttons */

    document.getElementById("reportMenu").style.display="none";

    /* Restore Heading */

    document.getElementById("reportTitle").innerHTML=currentReportTitle;

    /* Show Status Menu */

    document.getElementById("statusMenu").style.display="grid";

}

/* ==========================================
   reports.js - Part 4C
========================================== */


/* ===========================
   STATUS BACK
   (Status Menu -> Main Menu)
=========================== */

function statusBack(){

    reportMode=false;

    /* Hide Status Menu */

    document.getElementById("statusMenu").style.display="none";

    /* Hide Header */

    document.getElementById("reportHeader").style.display="none";

    /* Enable Loan Tabs */

    const loanBtn=document.getElementById("loanBtn");
    const paymentBtn=document.getElementById("paymentBtn");

    if(loanBtn) loanBtn.disabled=false;
    if(paymentBtn) paymentBtn.disabled=false;

    /* Show Previous Screen */

    if(currentReportGroup==="g4"){

        document.getElementById("loanContent").style.display="grid";

        return;

    }

    const g=document.getElementById(currentReportGroup);

    if(g){

        g.style.display="grid";

    }

}


/* ===========================
   RESET REPORT SCREEN
=========================== */

function resetReportScreen(){

    currentStatus="";

    currentReportTitle="";

    document.getElementById("reportMenu").style.display="none";

    document.getElementById("statusMenu").style.display="none";

    document.getElementById("reportHeader").style.display="none";

}

