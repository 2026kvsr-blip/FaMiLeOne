/* =====================================================
   oneFaMiLe V4
   REPORTS.JS
===================================================== */

"use strict";


/* =====================================================
   REPORT MENU ENGINE
===================================================== */

function showReportMenu(title, buttons){

    document.getElementById("middleMenu").style.display = "none";

    document.getElementById("reportHeader").style.display = "block";

    document.getElementById("textMenu").style.display = "grid";

    document.getElementById("reportTitle").textContent = title;

    const menu = document.getElementById("textMenu");

    menu.innerHTML = "";

    buttons.forEach(item=>{

        const btn = document.createElement("button");

        btn.className = item.back
            ? "text-btn back-btn"
            : "text-btn";

        btn.textContent = item.text;

        btn.onclick = item.action;

        menu.appendChild(btn);

    });

}



/* =====================================================
   EXPENSE REPORTS
===================================================== */

function openExpenseReports(){

    showReportMenu("Expense Reports",[

        {text:"Today Report",action:expenseToday},

        {text:"This Week",action:expenseWeek},

        {text:"This Month",action:expenseMonth},

        {text:"This Year",action:expenseYear},

        {text:"Daily Report",action:expenseDaily},

        {text:"Monthly Report",action:expenseMonthly},

        {text:"Yearly Report",action:expenseYearly},

        {text:"Report Abstract",action:expenseAbstract},

        {text:"← Back",back:true,action:backToHomeMenu}

    ]);

}



/* =====================================================
   ACTIVITY REPORTS
===================================================== */

function openActivityReports(){

    showReportMenu("Activity Reports",[

        {text:"Completed",action:activityCompleted},

        {text:"In Progress",action:activityProgress},

        {text:"To be Takenup",action:activityTakenup},

        {text:"Not Necessary",action:activityNotNecessary},

        {text:"Deadline Today",action:activityToday},

        {text:"Coming Soon",action:activityComing},

        {text:"Deadline Over",action:activityOver},

        {text:"Within _ Days",action:activityDays},

        {text:"← Back",back:true,action:backToHomeMenu}

    ]);

}



/* =====================================================
   HEALTH REPORTS
===================================================== */

function openHealthReports(){

    showReportMenu("Health Reports",[

        {text:"Today",action:healthToday},

        {text:"Medicines",action:healthMedicine},

        {text:"Appointments",action:healthAppointments},

        {text:"Lab Tests",action:healthLab},

        {text:"Hospitals",action:healthHospital},

        {text:"Doctors",action:healthDoctors},

        {text:"Medical History",action:healthHistory},

        {text:"Health Abstract",action:healthAbstract},

        {text:"← Back",back:true,action:backToHomeMenu}

    ]);

}



/* =====================================================
   INCOME REPORTS
===================================================== */

function openIncomeReports(){

    showReportMenu("Income Reports",[

        {text:"Today",action:incomeToday},

        {text:"Weekly",action:incomeWeek},

        {text:"Monthly",action:incomeMonth},

        {text:"Yearly",action:incomeYear},

        {text:"Sources",action:incomeSources},

        {text:"Recurring",action:incomeRecurring},

        {text:"Summary",action:incomeSummary},

        {text:"Income Abstract",action:incomeAbstract},

        {text:"← Back",back:true,action:backToHomeMenu}

    ]);

}

/* =====================================================
   LOAN REPORTS
===================================================== */

function openLoanReports(){

    showReportMenu("Loan Reports",[

        { text:"Lend",      action:openLendReports },

        { text:"Borrowed",  action:openBorrowedReports },

        { text:"← Back", back:true, action:backToHomeMenu }

    ]);

}



/* =====================================================
   LEND REPORTS
===================================================== */

function openLendReports(){

    showReportMenu("Lend Reports",[

        { text:"Lend List",            action:reportLendList },

        { text:"Lend Paid Off",        action:reportLendPaid },

        { text:"Lend Due List",        action:reportLendDue },

        { text:"Lend Over Dues",       action:reportLendOverDue },

        { text:"Lend Payments",        action:reportLendPayments },

        { text:"Due Within 5 Days",    action:reportLend5Days },

        { text:"Due Today",            action:reportLendToday },

        { text:"Report Abstract",      action:reportLendAbstract },

        { text:"← Back", back:true, action:openLoanReports }

    ]);

}



/* =====================================================
   BORROWED REPORTS
===================================================== */

function openBorrowedReports(){

    showReportMenu("Borrowed Reports",[

        { text:"Borrowed List",        action:reportBorrowedList },

        { text:"Borrowed Paid Off",    action:reportBorrowedPaid },

        { text:"Borrowed Due List",    action:reportBorrowedDue },

        { text:"Borrowed Over Dues",   action:reportBorrowedOverDue },

        { text:"Borrowed Payments",    action:reportBorrowedPayments },

        { text:"Due Within 5 Days",    action:reportBorrowed5Days },

        { text:"Due Today",            action:reportBorrowedToday },

        { text:"Report Abstract",      action:reportBorrowedAbstract },

        { text:"← Back", back:true, action:openLoanReports }

    ]);

}



/* =====================================================
   PLACEHOLDER FUNCTIONS
   (Database Logic Later)
===================================================== */

function reportLendList(){}

function reportLendPaid(){}

function reportLendDue(){}

function reportLendOverDue(){}

function reportLendPayments(){}

function reportLend5Days(){}

function reportLendToday(){}

function reportLendAbstract(){}



function reportBorrowedList(){}

function reportBorrowedPaid(){}

function reportBorrowedDue(){}

function reportBorrowedOverDue(){}

function reportBorrowedPayments(){}

function reportBorrowed5Days(){}

function reportBorrowedToday(){}

function reportBorrowedAbstract(){}

/* =====================================================
   LOAN SENSITIVE REPORTS
===================================================== */

function openLoanSensitive(){

    showReportMenu("Sensitive Reports",[

        { text:"Lend",      action:openLendSensitive },

        { text:"Borrowed",  action:openBorrowedSensitive },

        { text:"← Back", back:true, action:openLoanReports }

    ]);

}



/* =====================================================
   LEND SENSITIVE
===================================================== */

function openLendSensitive(){

    showReportMenu("Lend Sensitive Reports",[

        { text:"High Amount",          action:lendSensitiveHighAmount },

        { text:"Long Pending",         action:lendSensitivePending },

        { text:"Over Due",             action:lendSensitiveOverDue },

        { text:"No Payments",          action:lendSensitiveNoPayment },

        { text:"Due Today",            action:lendSensitiveToday },

        { text:"Due Within 5 Days",    action:lendSensitiveFiveDays },

        { text:"← Back", back:true, action:openLoanSensitive }

    ]);

}



/* =====================================================
   BORROWED SENSITIVE
===================================================== */

function openBorrowedSensitive(){

    showReportMenu("Borrowed Sensitive Reports",[

        { text:"High Amount",          action:borrowSensitiveHighAmount },

        { text:"Long Pending",         action:borrowSensitivePending },

        { text:"Over Due",             action:borrowSensitiveOverDue },

        { text:"No Payments",          action:borrowSensitiveNoPayment },

        { text:"Due Today",            action:borrowSensitiveToday },

        { text:"Due Within 5 Days",    action:borrowSensitiveFiveDays },

        { text:"← Back", back:true, action:openLoanSensitive }

    ]);

}



/* =====================================================
   LOAN ALL REPORTS
===================================================== */

function openLoanAllReports(){

    showReportMenu("All Loan Reports",[

        { text:"Lend",      action:openLendAllReports },

        { text:"Borrowed",  action:openBorrowedAllReports },

        { text:"← Back", back:true, action:openLoanReports }

    ]);

}



/* =====================================================
   LEND ALL REPORTS
===================================================== */

function openLendAllReports(){

    showReportMenu("All Lend Reports",[

        { text:"Complete Loan List", action:lendAllLoanList },

        { text:"Complete Payments",  action:lendAllPayments },

        { text:"Complete Due List",  action:lendAllDueList },

        { text:"Complete Summary",   action:lendAllSummary },

        { text:"← Back", back:true, action:openLoanAllReports }

    ]);

}



/* =====================================================
   BORROWED ALL REPORTS
===================================================== */

function openBorrowedAllReports(){

    showReportMenu("All Borrowed Reports",[

        { text:"Complete Loan List", action:borrowAllLoanList },

        { text:"Complete Payments",  action:borrowAllPayments },

        { text:"Complete Due List",  action:borrowAllDueList },

        { text:"Complete Summary",   action:borrowAllSummary },

        { text:"← Back", back:true, action:openLoanAllReports }

    ]);

}



/* =====================================================
   PLACEHOLDERS
===================================================== */

function lendSensitiveHighAmount(){}
function lendSensitivePending(){}
function lendSensitiveOverDue(){}
function lendSensitiveNoPayment(){}
function lendSensitiveToday(){}
function lendSensitiveFiveDays(){}

function borrowSensitiveHighAmount(){}
function borrowSensitivePending(){}
function borrowSensitiveOverDue(){}
function borrowSensitiveNoPayment(){}
function borrowSensitiveToday(){}
function borrowSensitiveFiveDays(){}

function lendAllLoanList(){}
function lendAllPayments(){}
function lendAllDueList(){}
function lendAllSummary(){}

function borrowAllLoanList(){}
function borrowAllPayments(){}
function borrowAllDueList(){}
function borrowAllSummary(){}
/* =====================================================
   PAYMENT REPORTS
===================================================== */

function openPaymentReports() {

    showReportMenu("Payment Reports", [

        { text: "Lend Payments",      action: openPaymentLendReports },
        { text: "Borrowed Payments",  action: openPaymentBorrowedReports },
        { text: "← Back", back: true, action: backToHomeMenu }

    ]);

}


/* =====================================================
   PAYMENT - LEND
===================================================== */

function openPaymentLendReports(){

    showReportMenu("Lend Payments",[

        { text:"Today's Payments",    action:paymentLendToday },

        { text:"Weekly Payments",     action:paymentLendWeek },

        { text:"Monthly Payments",    action:paymentLendMonth },

        { text:"Yearly Payments",     action:paymentLendYear },

        { text:"All Payments",        action:paymentLendAll },

        { text:"← Back", back:true, action:openPaymentReports }

    ]);

}


/* =====================================================
   PAYMENT - BORROWED
===================================================== */

function openPaymentBorrowedReports(){

    showReportMenu("Borrowed Payments",[

        { text:"Today's Payments",    action:paymentBorrowToday },

        { text:"Weekly Payments",     action:paymentBorrowWeek },

        { text:"Monthly Payments",    action:paymentBorrowMonth },

        { text:"Yearly Payments",     action:paymentBorrowYear },

        { text:"All Payments",        action:paymentBorrowAll },

        { text:"← Back", back:true, action:openPaymentReports }

    ]);

}


/* =====================================================
   MEMORIES REPORTS
===================================================== */

function openMemoryReports(){

    showReportMenu("Memory Reports",[

        { text:"Photos",        action:memoryPhotos },

        { text:"Videos",        action:memoryVideos },

        { text:"Documents",     action:memoryDocuments },

        { text:"Events",        action:memoryEvents },

        { text:"Birthdays",     action:memoryBirthdays },

        { text:"Anniversaries", action:memoryAnniversaries },

        { text:"Family Trips",  action:memoryTrips },

        { text:"Favorites",     action:memoryFavorites },

        { text:"← Back", back:true, action:backToHomeMenu }

    ]);

}


/* =====================================================
   COMMON REPORT DISPLAY
===================================================== */

function showReport(title){

    setPageTitle(title);

    document.getElementById("middleMenu").style.display="none";

    document.getElementById("textMenu").style.display="none";

    document.getElementById("reportHeader").style.display="none";

    document.getElementById("reportContainer").style.display="block";

    document.getElementById("reportContainer").innerHTML=`

        <div class="report-page">

            <h2>${title}</h2>

            <br>

            <p>
                Report data will be loaded from Firebase.
            </p>

        </div>

    `;

}



/* =====================================================
   PAYMENT PLACE HOLDERS
===================================================== */

function paymentLendToday(){ showReport("Today's Lend Payments"); }
function paymentLendWeek(){ showReport("Weekly Lend Payments"); }
function paymentLendMonth(){ showReport("Monthly Lend Payments"); }
function paymentLendYear(){ showReport("Yearly Lend Payments"); }
function paymentLendAll(){ showReport("All Lend Payments"); }

function paymentBorrowToday(){ showReport("Today's Borrowed Payments"); }
function paymentBorrowWeek(){ showReport("Weekly Borrowed Payments"); }
function paymentBorrowMonth(){ showReport("Monthly Borrowed Payments"); }
function paymentBorrowYear(){ showReport("Yearly Borrowed Payments"); }
function paymentBorrowAll(){ showReport("All Borrowed Payments"); }


/* =====================================================
   MEMORY PLACE HOLDERS
===================================================== */

function memoryPhotos(){ showReport("Photos"); }
function memoryVideos(){ showReport("Videos"); }
function memoryDocuments(){ showReport("Documents"); }
function memoryEvents(){ showReport("Events"); }
function memoryBirthdays(){ showReport("Birthdays"); }
function memoryAnniversaries(){ showReport("Anniversaries"); }
function memoryTrips(){ showReport("Family Trips"); }
function memoryFavorites(){ showReport("Favorites"); }
