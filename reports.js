/* ==========================================
   oneFaMiLe V2.0
   reports.js
========================================== */


/* ===========================
   CREATE REPORT BUTTONS
=========================== */

function createReportButtons(){

    const box=document.getElementById("reportMenu");

    if(!box) return;

    box.innerHTML="";

    reportButtons.forEach(name=>{

    const cls = (name==="Back")
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

    reportMode=false;
   document.getElementById("loanBtn").disabled = false;
document.getElementById("paymentBtn").disabled = false;
document.getElementById("reportHeader").style.display="none";
    document.getElementById("reportMenu").style.display="none";

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
