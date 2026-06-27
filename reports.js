/* ==========================================
   reports.js
========================================== */

let reportMode = false;
let currentReportGroup = "";

/* ---------- Open Report Menu ---------- */

function openReportMenu(groupId){

    reportMode = true;
    currentReportGroup = groupId;

    /* Hide current menu */

    if(groupId === "g4"){

        document.getElementById("loanContent").style.display = "none";

    }else{

        document.getElementById(groupId).style.display = "none";

    }

    createReportButtons();

    document.getElementById("reportMenu").style.display = "grid";

}


/* ---------- Create Report Buttons ---------- */

function createReportButtons(){

    const box = document.getElementById("reportMenu");

    box.innerHTML = "";

    reportButtons.forEach(function(name){

        box.innerHTML += `

        <button class="report-btn"
                onclick="reportButtonClick('${name}')">

            ${name}

        </button>

        `;

    });

}


/* ---------- Report Button ---------- */

function reportButtonClick(name){

    if(name === "Back"){

        backReportMenu();
        return;

    }

    alert(name);

}


/* ---------- Back ---------- */

function backReportMenu(){

    reportMode = false;

    document.getElementById("reportMenu").style.display = "none";

    if(currentReportGroup === "g4"){

        document.getElementById("loanContent").style.display = "grid";

    }else{

        document.getElementById(currentReportGroup).style.display = "grid";

    }

}


/* ---------- Report Actions ---------- */

const reportActions = {

    expenseReports : "g1",
    sensitiveExpense : "g1",
    allExpenseReports : "g1",

    activityReports : "g2",
    sensitiveActivity : "g2",
    allActivityReports : "g2",

    healthReports : "g3",
    sensitiveHealth : "g3",
    allHealthReports : "g3",

    memoryReports : "g5",
    sensitiveMemory : "g5",
    allMemoryReports : "g5",

    incomeReports : "g10",
    sensitiveIncome : "g10",
    allIncomeReports : "g10",

    loanReports : "g4",
    sensitiveLoan : "g4",
    allLoanReports : "g4",

    paymentReports : "g4",
    sensitivePayment : "g4",
    allPaymentReports : "g4"

};


/* ---------- Handle Menu Click ---------- */

function menuClick(action){

    if(reportMode){

        return;

    }

    if(reportActions[action]){

        openReportMenu(reportActions[action]);
        return;

    }

    console.log("Open :", action);

}
