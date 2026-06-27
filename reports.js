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

        box.innerHTML+=`

        <button
            class="report-btn"
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
   OPEN REPORT MENU
=========================== */

function openReportMenu(groupId){

    reportMode=true;

    currentReportGroup=groupId;

    if(groupId==="g4"){

        document.getElementById("loanContent").style.display="none";

    }
    else{

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
