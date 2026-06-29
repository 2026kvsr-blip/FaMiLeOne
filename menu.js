/* ==========================================
   oneFaMiLe V4
   menu.js
   PART-1
========================================== */



/* ===========================
   GLOBAL VARIABLES
=========================== */

let reportMode = false;

let currentGroup = "";

let currentModule = "";

let currentAction = "";

let loanMode = "";

let paymentMode = "";

let memoryMode = "";


/* ===========================
   INITIALIZE APP
=========================== */

window.onload = function(){

    createTopMenu();

    createCircleMenus();

    showHome();

};


/* ===========================
   CREATE TOP MENU
=========================== */

function createTopMenu(){

    const box = document.getElementById("topButtons");

    if(!box) return;

    box.innerHTML = "";

    topMenu.forEach(item=>{

        box.innerHTML += `

        <a href="#"

           class="rect-btn"

           onclick="showGroup('${item.id}',this);return false;">

            <img src="${item.img}">

            <span>${item.text}</span>

        </a>

        `;

    });

}


/* ===========================
   CREATE ALL CIRCLE MENUS
=========================== */

function createCircleMenus(){

    for(const id in menuData){

        const box = document.getElementById(id);

        if(!box) continue;

        box.innerHTML = "";

        menuData[id].forEach(item=>{

            box.innerHTML += `

            <a href="#"

               class="circle-item"

               onclick="menuClick('${item.action}');return false;">

                <div class="circle">

                    <img src="${item.img}">

                </div>

                <span>

                    ${item.text}

                </span>

            </a>

            `;

        });

    }

}


/* ===========================
   REMOVE ACTIVE BUTTONS
=========================== */

function clearActive(){

    document

    .querySelectorAll(

    ".rect-btn,.loan-tab-btn,.nav-btn"

    )

    .forEach(btn=>{

        btn.classList.remove("active");

    });

}


/* ===========================
   HIDE ALL PAGES
=========================== */

function hideAllPages(){

    document

    .querySelectorAll(".circle-grid")

    .forEach(p=>{

        p.style.display="none";

    });

    const ids=[

    "homeMessage",

    "langSelect",

    "g4",

    "reportHeader",

    "reportMenu",

    "activityStatusMenu",

    "loanMainMenu",

    "loanCategoryMenu",

    "loanListMenu",

    "paymentMainMenu",

    "paymentCategoryMenu",

    "paymentListMenu",

    "memoryCategoryMenu"

    ];

    ids.forEach(id=>{

        const x=document.getElementById(id);

        if(x) x.style.display="none";

    });

}


/* ===========================
   HOME
=========================== */

function showHome(){

    reportMode=false;

    hideAllPages();

    const h=document.getElementById("homeMessage");

    if(h) h.style.display="block";

    const l=document.getElementById("langSelect");

    if(l) l.style.display="flex";

}


/* ==========================================
   oneFaMiLe V4
   menu.js
   PART-2
========================================== */


/* ===========================
   SHOW GROUP
=========================== */

function showGroup(id,btn){

    if(reportMode) return;

    currentGroup=id;

    clearActive();

    if(btn){

        btn.classList.add("active");

    }

    hideAllPages();

    if(id==="g4"){

        document.getElementById("g4").style.display="block";

        showLoanSection(
            "g11",
            document.getElementById("loanBtn")
        );

        return;

    }

    const page=document.getElementById(id);

    if(page){

        page.style.display="grid";

    }

}


/* ===========================
   LOAN / PAYMENT TAB
=========================== */

function showLoanSection(id,btn){

    document
    .querySelectorAll(".loan-tab-btn")
    .forEach(b=>b.classList.remove("active"));

    if(btn){

        btn.classList.add("active");

    }

    const box=document.getElementById("loanContent");

    if(box){

        box.innerHTML=
        document.getElementById(id).innerHTML;

        box.style.display="grid";

    }

}


/* ===========================
   MENU CLICK
=========================== */

function menuClick(action){

    currentAction=action;

    switch(action){

/* -------------------------
   EXPENSES
------------------------- */

case "expenseReports":
case "expenseSensitive":
case "expenseAllReports":

    openReportMenu(
        "Expenses",
        action
    );

break;


/* -------------------------
   ACTIVITIES
------------------------- */

case "activityReports":
case "activitySensitive":
case "activityAllReports":

    openActivityStatus(
        action
    );

break;


/* -------------------------
   HEALTH
------------------------- */

case "healthReports":
case "healthSensitive":
case "healthAllReports":

    openReportMenu(
        "Health",
        action
    );

break;


/* -------------------------
   LOANS
------------------------- */

case "loanReports":
case "loanSensitive":
case "loanAllReports":

    openLoanMain(
        action
    );

break;


/* -------------------------
   PAYMENTS
------------------------- */

case "paymentReports":
case "paymentSensitive":
case "paymentAllReports":

    openPaymentMain(
        action
    );

break;


/* -------------------------
   MEMORIES
------------------------- */

case "memoryReports":
case "memorySensitive":
case "memoryAllReports":

    openMemoryMenu(
        action
    );

break;


/* -------------------------
   INCOME
------------------------- */

case "incomeReports":
case "incomeSensitive":
case "incomeAllReports":

    openReportMenu(
        "Income",
        action
    );

break;


/* -------------------------
   ADD
------------------------- */

case "addExpense":

alert("Add Expense");

break;


case "addActivity":

alert("Add Activity");

break;


case "addHealth":

alert("Add Health");

break;


case "addLoan":

alert("Add Loan");

break;


case "addPayment":

alert("Add Payment");

break;


case "addMemory":

alert("Add Memory");

break;


case "addIncome":

alert("Add Income");

break;


/* -------------------------
   SEARCH
------------------------- */

case "searchExpense":

alert("Search Expense");

break;


case "searchActivity":

alert("Search Activity");

break;


case "searchHealth":

alert("Search Health");

break;


case "searchLoan":

alert("Search Loan");

break;


case "searchPayment":

alert("Search Payment");

break;


case "searchMemory":

alert("Search Memory");

break;


case "searchIncome":

alert("Search Income");

break;


/* -------------------------
   ABOUT
------------------------- */

case "aboutExpense":

alert(aboutMessages.expense);

break;


case "aboutActivity":

alert(aboutMessages.activity);

break;


case "aboutHealth":

alert(aboutMessages.health);

break;


case "aboutLoan":

alert(aboutMessages.loan);

break;


case "aboutPayment":

alert(aboutMessages.payment);

break;


case "aboutMemory":

alert(aboutMessages.memory);

break;


case "aboutIncome":

alert(aboutMessages.income);

break;

    }

}


/* ==========================================
   oneFaMiLe V4
   menu.js
   PART-3
========================================== */


/* ===========================
   REPORT HEADER
=========================== */

function showReportHeader(title,icon){

    const header=document.getElementById("reportHeader");

    header.style.display="block";

    document.getElementById("reportTitle").innerHTML=title;

    document.getElementById("reportIcon").src=icon;

}


/* ===========================
   HIDE REPORT MENUS
=========================== */

function hideReportMenus(){

    const ids=[

    "reportMenu",

    "activityStatusMenu",

    "loanMainMenu",

    "loanCategoryMenu",

    "loanListMenu",

    "paymentMainMenu",

    "paymentCategoryMenu",

    "paymentListMenu",

    "memoryCategoryMenu"

    ];

    ids.forEach(id=>{

        const obj=document.getElementById(id);

        if(obj){

            obj.style.display="none";

        }

    });

}


/* ===========================
   CREATE BUTTONS
=========================== */

function createButtons(containerId,list,clickFunction){

    const box=document.getElementById(containerId);

    box.innerHTML="";

    list.forEach(name=>{

        const cls=(name==="Back")

        ?"report-btn back-btn"

        :"report-btn";

        box.innerHTML+=`

        <button

        class="${cls}"

        onclick="${clickFunction}('${name}')">

        ${name}

        </button>

        `;

    });

    box.style.display="grid";

}


/* ===========================
   UNIVERSAL REPORT MENU
=========================== */

function openReportMenu(module,action){

    reportMode=true;

    hideAllPages();

    hideReportMenus();

    currentModule=module;

    currentAction=action;

    showReportHeader(

        reportTitles[action],

        reportIcons[action]

    );

    createButtons(

        "reportMenu",

        reportButtons,

        "reportButtonClick"

    );

}


/* ===========================
   ACTIVITIES
=========================== */

function openActivityStatus(action){

    reportMode=true;

    hideAllPages();

    hideReportMenus();

    currentModule="Activities";

    currentAction=action;

    showReportHeader(

        reportTitles[action],

        reportIcons[action]

    );

    createButtons(

        "activityStatusMenu",

        activityStatus,

        "activityStatusClick"

    );

}


/* ===========================
   LOANS
=========================== */

function openLoanMain(action){

    reportMode=true;

    hideAllPages();

    hideReportMenus();

    currentModule="Loans";

    currentAction=action;

    showReportHeader(

        reportTitles[action],

        reportIcons[action]

    );

    createButtons(

        "loanMainMenu",

        loanMain,

        "loanMainClick"

    );

}


/* ===========================
   PAYMENTS
=========================== */

function openPaymentMain(action){

    reportMode=true;

    hideAllPages();

    hideReportMenus();

    currentModule="Payments";

    currentAction=action;

    showReportHeader(

        reportTitles[action],

        reportIcons[action]

    );

    createButtons(

        "paymentMainMenu",

        paymentMain,

        "paymentMainClick"

    );

}


/* ===========================
   MEMORIES
=========================== */

function openMemoryMenu(action){

    reportMode=true;

    hideAllPages();

    hideReportMenus();

    currentModule="Memories";

    currentAction=action;

    showReportHeader(

        reportTitles[action],

        reportIcons[action]

    );

    createButtons(

        "memoryCategoryMenu",

        memoryCategories,

        "memoryCategoryClick"

    );

}


/* ==========================================
   oneFaMiLe V4
   menu.js
   PART-4 (FINAL)
========================================== */


/* ===========================
   REPORT BUTTON CLICK
=========================== */

function reportButtonClick(name){

if(name==="Back"){

        backToMainMenu();

        return;

    }

    loadReport(name);


}


/* ===========================
   ACTIVITY STATUS CLICK
=========================== */

function activityStatusClick(name){

    if(name==="Back"){

        activityStatusBack();

        return;

    }

    document.getElementById("activityStatusMenu").style.display="none";

    showReportHeader(

        "Activities - "+name,

        "images/report.png"

    );

    createButtons(

        "reportMenu",

        reportButtons,

        "reportButtonClick"

    );

}


/* ===========================
   LOAN MAIN CLICK
=========================== */

function loanMainClick(name){

    if(name==="Back"){

        backToMainMenu();

        return;

    }

    loanMode=name;

    document.getElementById("loanMainMenu").style.display="none";

    showReportHeader(

        "Loans - "+name,

        "images/report.png"

    );

    createButtons(

        "loanCategoryMenu",

        loanCategories,

        "loanCategoryClick"

    );

}


/* ===========================
   LOAN CATEGORY CLICK
=========================== */

function loanCategoryClick(name){

    if(name==="Back"){

        document.getElementById("loanCategoryMenu").style.display="none";

        document.getElementById("loanMainMenu").style.display="grid";

        showReportHeader(

            "Loans",

            "images/report.png"

        );

        return;

    }

    if(name==="Reports" ||
       name==="Sensitive" ||
       name==="All Reports"){

        document.getElementById("loanCategoryMenu").style.display="none";

        showReportHeader(

            "Loans - "+loanMode+" - "+name,

            "images/report.png"

        );

        createButtons(

            "loanListMenu",

            loanMode==="Lend"
            ? lendReports
            : borrowedReports,

            "loanListClick"

        );

        return;

    }

    alert(name);

}


/* ===========================
   LOAN LIST CLICK
=========================== */

function loanListClick(name){

    if(name==="Back"){

        document.getElementById("loanListMenu").style.display="none";

        document.getElementById("loanCategoryMenu").style.display="grid";

        showReportHeader(

            "Loans - "+loanMode,

            "images/report.png"

        );

        return;

    }

    document.getElementById("loanListMenu").style.display="none";

    showReportHeader(

        "Loans - "+loanMode+" - "+name,

        "images/report.png"

    );

    createButtons(

        "reportMenu",

        reportButtons,

        "reportButtonClick"

    );

}


/* ===========================
   PAYMENT MAIN CLICK
=========================== */

function paymentMainClick(name){

    if(name==="Back"){

        backToMainMenu();

        return;

    }

    paymentMode=name;

    document.getElementById("paymentMainMenu").style.display="none";

    showReportHeader(

        "Payments - "+name,

        "images/report.png"

    );

    createButtons(

        "paymentCategoryMenu",

        paymentCategories,

        "paymentCategoryClick"

    );

}


/* ===========================
   PAYMENT CATEGORY CLICK
=========================== */

function paymentCategoryClick(name){

    if(name==="Back"){

        document.getElementById("paymentCategoryMenu").style.display="none";

        document.getElementById("paymentMainMenu").style.display="grid";

        showReportHeader(

            "Payments",

            "images/report.png"

        );

        return;

    }

    if(name==="Reports" ||
       name==="Sensitive" ||
       name==="All Reports"){

        document.getElementById("paymentCategoryMenu").style.display="none";

        showReportHeader(

            "Payments - "+paymentMode+" - "+name,

            "images/report.png"

        );

        createButtons(

            "paymentListMenu",

            paymentMode==="Lend"
            ? paymentLendReports
            : paymentBorrowedReports,

            "paymentListClick"

        );

        return;

    }

    alert(name);

}


/* ===========================
   PAYMENT LIST CLICK
=========================== */

function paymentListClick(name){

    if(name==="Back"){

        document.getElementById("paymentListMenu").style.display="none";

        document.getElementById("paymentCategoryMenu").style.display="grid";

        showReportHeader(

            "Payments - "+paymentMode,

            "images/report.png"

        );

        return;

    }

    document.getElementById("paymentListMenu").style.display="none";

    showReportHeader(

        "Payments - "+paymentMode+" - "+name,

        "images/report.png"

    );

    createButtons(

        "reportMenu",

        reportButtons,

        "reportButtonClick"

    );

}


/* ===========================
   MEMORY CATEGORY CLICK
=========================== */

function memoryCategoryClick(name){

    if(name==="Back"){

        backToMainMenu();

        return;

    }

    document.getElementById("memoryCategoryMenu").style.display="none";

    showReportHeader(

        name,

        "images/report.png"

    );

    createButtons(

        "reportMenu",

        reportButtons,

        "reportButtonClick"

    );

}


/* ===========================
   BACK FUNCTIONS
=========================== */

function activityStatusBack(){

    backToMainMenu();

}

function backToMainMenu(){

    reportMode=false;

    hideReportMenus();

    document.getElementById("reportHeader").style.display="none";

    showGroup(currentGroup);

}


/* ===========================
   SIDE MENU
=========================== */

function toggleMenu(){

    document.getElementById("menu").classList.toggle("open");

}

function closeMenu(){

    document.getElementById("menu").classList.remove("open");

}


/* ===========================
   EXIT
=========================== */

function showExit(){

    if(confirm("Exit oneFaMiLe ?")){

        window.close();

    }

}
