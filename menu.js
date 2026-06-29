/* =====================================================
   oneFaMiLe V4
   MENU.JS
===================================================== */

"use strict";

/* =====================================================
   GLOBAL MENU VARIABLES
===================================================== */

let currentModule = "expenses";

let currentSubMenu = "";

let currentView = "home";


/* =====================================================
   MENU DATA
===================================================== */

const homeMenus = {

    expenses: [

        { id:"add",        text:"Add Expense", image:"add.png" },
        { id:"reports",    text:"Reports", image:"reports.png" },
        { id:"sensitive",  text:"Sensitive", image:"sensitive.png" },
        { id:"allreports", text:"All Reports", image:"allreports.png" },
        { id:"search",     text:"Search", image:"search.png" },
        { id:"about",      text:"About", image:"about.png" }

    ],

    activities: [

        { id:"add",        text:"Add Activity", image:"add.png" },
        { id:"reports",    text:"Reports", image:"reports.png" },
        { id:"sensitive",  text:"Sensitive", image:"sensitive.png" },
        { id:"allreports", text:"All Reports", image:"allreports.png" },
        { id:"search",     text:"Search", image:"search.png" },
        { id:"about",      text:"About", image:"about.png" }

    ],

    health: [

        { id:"add",        text:"Add Health", image:"add.png" },
        { id:"reports",    text:"Reports", image:"reports.png" },
        { id:"sensitive",  text:"Sensitive", image:"sensitive.png" },
        { id:"allreports", text:"All Reports", image:"allreports.png" },
        { id:"search",     text:"Search", image:"search.png" },
        { id:"about",      text:"About", image:"about.png" }

    ],

    loans: [

        { id:"addloan",    text:"Add Loan", image:"add.png" },
        { id:"payments",   text:"Payments", image:"payment.png" },
        { id:"reports",    text:"Reports", image:"reports.png" },
        { id:"sensitive",  text:"Sensitive", image:"sensitive.png" },
        { id:"allreports", text:"All Reports", image:"allreports.png" },
        { id:"search",     text:"Search", image:"search.png" }

    ],

    income: [

        { id:"add",        text:"Add Income", image:"add.png" },
        { id:"reports",    text:"Reports", image:"reports.png" },
        { id:"sensitive",  text:"Sensitive", image:"sensitive.png" },
        { id:"allreports", text:"All Reports", image:"allreports.png" },
        { id:"search",     text:"Search", image:"search.png" },
        { id:"about",      text:"About", image:"about.png" }

    ]

};


/* =====================================================
   INITIAL MENU
===================================================== */

window.addEventListener("load",function(){

    loadHomeMenu("expenses");

});


/* =====================================================
   LOAD HOME MENU
===================================================== */

function loadHomeMenu(module){

    currentModule = module;

    currentView = "home";

    document.getElementById("textMenu").style.display="none";

    document.getElementById("reportHeader").style.display="none";

    document.getElementById("middleMenu").style.display="grid";

    buildCircleMenu(homeMenus[module]);

}

/* =====================================================
   BUILD CIRCLE MENU
===================================================== */

function buildCircleMenu(menuItems){

    const menu = document.getElementById("middleMenu");

    menu.innerHTML = "";

    menuItems.forEach(item=>{

        const div = document.createElement("div");

        div.className = "circle-item";

        div.innerHTML = `

            <div class="circle">

                <img src="images/${item.image}"
                     alt="${item.text}">

            </div>

            <span>${item.text}</span>

        `;

        div.onclick = function(){

            circleMenuClick(item.id,item.text);

        };

        menu.appendChild(div);

    });

}


/* =====================================================
   CIRCLE MENU CLICK
===================================================== */

function circleMenuClick(id,title){

    switch(id){

        case "add":

            openForm(title);

            break;


        case "addloan":

            openLoanForm();

            break;


        case "reports":

            openReports();

            break;


        case "sensitive":

            openSensitiveReports();

            break;


        case "allreports":

            openAllReports();

            break;


        case "payments":

            openLoanPayments();

            break;


        case "search":

            openSearch();

            break;


        case "about":

            openAbout();

            break;

    }

}


/* =====================================================
   TOP BUTTON EVENTS
===================================================== */

document.getElementById("expenseBtn").onclick=function(){

    selectTopButton(this);

    setPageTitle("Expenses");

    loadHomeMenu("expenses");

};


document.getElementById("activityBtn").onclick=function(){

    selectTopButton(this);

    setPageTitle("Activities");

    loadHomeMenu("activities");

};


document.getElementById("healthBtn").onclick=function(){

    selectTopButton(this);

    setPageTitle("Health");

    loadHomeMenu("health");

};


document.getElementById("loanBtn").onclick=function(){

    selectTopButton(this);

    setPageTitle("Loans");

    loadHomeMenu("loans");

};


document.getElementById("incomeBtn").onclick=function(){

    selectTopButton(this);

    setPageTitle("Income");

    loadHomeMenu("income");

};


/* =====================================================
   ACTIVE TOP BUTTON
===================================================== */

function selectTopButton(button){

    document.querySelectorAll(".rect-btn")
    .forEach(btn=>btn.classList.remove("active"));

    button.classList.add("active");

}


/* =====================================================
   TEXT MENU
===================================================== */

function showTextMenu(title, buttons){

    setPageTitle(title);

    document.getElementById("middleMenu").style.display = "none";
    document.getElementById("reportHeader").style.display = "block";

    document.getElementById("reportTitle").textContent = title;

    const menu = document.getElementById("textMenu");

    menu.style.display = "grid";

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
   LOANS
===================================================== */

function openLoanReports(){

    showTextMenu("Loans",[

        {
            text:"Lend",
            action:openLendMenu
        },

        {
            text:"Borrowed",
            action:openBorrowedMenu
        },

        {
            text:"← Back",
            back:true,
            action:backToHomeMenu
        }

    ]);

}



/* =====================================================
   LOAN PAYMENTS
===================================================== */

function openLoanPayments(){

    showTextMenu("Payments",[

        {
            text:"Lend",
            action:openPaymentLendMenu
        },

        {
            text:"Borrowed",
            action:openPaymentBorrowedMenu
        },

        {
            text:"← Back",
            back:true,
            action:backToHomeMenu
        }

    ]);

}



/* =====================================================
   BACK TO HOME
===================================================== */

function backToHomeMenu(){

    document.getElementById("textMenu").style.display="none";

    document.getElementById("reportHeader").style.display="none";

    document.getElementById("middleMenu").style.display="grid";

}
