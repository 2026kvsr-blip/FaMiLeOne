/* ==========================================
   oneFaMiLe V2.0
   reports.js
========================================== */



/* ===========================
   CREATE REPORT BUTTONS
=========================== */
let currentStatus = "";


function createReportButtons(){

    const box=document.getElementById("reportMenu");

    if(!box) return;

    box.innerHTML="";

    reportButtons.forEach(name=>{

const cls = (name==="← Back")
        ? "report-btn back-btn"
        : "report-btn";

    box.innerHTML += `
    <button
        class="${cls}"
        onclick="reportButtonClick('${name}')">

        ${name}

    </button>`;
});

}
/* ==========================
   STATUS BUTTON CLICK
========================== */

function statusButtonClick(status){

    currentStatus = status;

    // Status Menu hide
    document.getElementById("statusMenu").style.display = "none";

    // Heading update
    document.getElementById("reportTitle").innerHTML =
        document.getElementById("reportTitle").innerHTML +
        "<br><span style='font-size:16px'>" + status + "</span>";

    // Report buttons show

   
    document.getElementById("statusMenu").style.display = "grid";
}

/* ==========================
   STATUS BACK
========================== */

function statusBack(){

    // Status Menu close
    document.getElementById("statusMenu").style.display = "none";

    // Main circular buttons show again
    reportMode = false;

    document.getElementById(currentReportGroup).style.display = "grid";

    document.getElementById("reportHeader").style.display = "none";

}



/* ===========================
   REPORT BUTTON CLICK
=========================== */

function reportButtonClick(name){

    if(name==="← Back"){

        backReportMenu();

        return;

    }

    showPopup(name);

}

/* ===========================
   OPEN REPORT MENU
=========================== */







function openReportMenu(groupId,title){

    reportMode = true;

    currentReportGroup = groupId;

    document.getElementById("reportTitle").innerHTML = title;

    document.getElementById("reportHeader").style.display = "block";
   document.getElementById("loanBtn").disabled = true;
  document.getElementById("paymentBtn").disabled = true;

    if(groupId==="g4"){

        document.getElementById("loanContent").style.display="none";

    }else{

        const g=document.getElementById(groupId);

        if(g){

            g.style.display="none";

        }

    }

    createReportButtons();

    document.getElementById("reportMenu").style.display="grid";

}

/* ===========================
   BACK REPORT MENU
=========================== */

function backReportMenu(){

    // Report buttons hide
    document.getElementById("reportMenu").style.display = "none";

    // Status menu show
    document.getElementById("statusMenu").style.display = "grid";

}
/* ===========================
   REPORT ACTIONS
=========================== */

const reportActions=[

"expenseReports",
"sensitiveExpense",
"allExpenseReports",

"activityReports",
"sensitiveActivity",
"allActivityReports",

"healthReports",
"sensitiveHealth",
"allHealthReports",

"loanReports",
"sensitiveLoan",
"allLoanReports",

"paymentReports",
"sensitivePayment",
"allPaymentReports",

"incomeReports",
"sensitiveIncome",
"allIncomeReports",

"memoryReports",
"sensitiveMemory",
"allMemoryReports"

];


/* ===========================
   CHECK REPORT ACTION
=========================== */

function isReportAction(action){

    return reportActions.includes(action);

}
