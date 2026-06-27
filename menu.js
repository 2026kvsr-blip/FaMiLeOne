/* ==========================================
   oneFaMiLe - menu.js
   Part 8A
========================================== */

let reportMode = false;
let currentReportGroup = "";

/* ===========================
   CREATE TOP MENU
=========================== */

function createTopMenu(){

    const row = document.getElementById("topButtons");

    if(!row) return;

    row.innerHTML = "";

    topMenu.forEach(item=>{

        row.innerHTML += `
        <a href="#"
           class="rect-btn"
           onclick="showGroup('${item.id}',this);return false;">

            <img src="${item.img}">
            <span>${item.text}</span>

        </a>`;
    });

}


/* ===========================
   CREATE CIRCLE MENUS
=========================== */

function createCircleMenus(){

    for(const id in menuData){

        const box=document.getElementById(id);

        if(!box) continue;

        box.innerHTML="";

        menuData[id].forEach(item=>{

            box.innerHTML += `
            <a href="#"
               class="circle-item"
               onclick="menuClick('${item.action || ""}');return false;">

                <div class="circle">
                    <img src="${item.img}">
                </div>

                <span>${item.text}</span>

            </a>`;
        });

    }

}


/* ===========================
   REMOVE ACTIVE
=========================== */

function clearActive(){

    document.querySelectorAll(
        ".rect-btn,.nav-btn,.loan-tab-btn"
    ).forEach(btn=>{

        btn.classList.remove("active");

    });

}


/* ===========================
   HIDE ALL PAGES
=========================== */

function hideAllPages(){

    document.querySelectorAll(".circle-grid")
    .forEach(g=>g.style.display="none");

    const g4=document.getElementById("g4");
    if(g4) g4.style.display="none";

    const home=document.getElementById("homeMessage");
    if(home) home.style.display="none";

    const report=document.getElementById("reportMenu");
    if(report) report.style.display="none";

    const lang=document.getElementById("langSelect");
    if(lang) lang.style.display="none";

}


/* ===========================
   HOME
=========================== */

function showHome(btn){

    if(reportMode){

        backReportMenu();

    }

    clearActive();

    if(btn){

        btn.classList.add("active");

    }

    hideAllPages();

    document.getElementById("homeMessage").style.display="block";

    document.getElementById("langSelect").style.display="block";

}


/* ===========================
   SHOW GROUP
=========================== */

function showGroup(id,btn){

    if(reportMode){

        return;

    }

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

    const group=document.getElementById(id);

    if(group){

        group.style.display="grid";

    }

}


/* ===========================
   LOAN / PAYMENT
=========================== */

function showLoanSection(id,btn){

    document.querySelectorAll(".loan-tab-btn")
    .forEach(b=>b.classList.remove("active"));

    if(btn){

        btn.classList.add("active");

    }

    const loan=document.getElementById("loanContent");

    loan.innerHTML=
        document.getElementById(id).innerHTML;

    loan.style.display="grid";

} 


/* ==========================================
   oneFaMiLe - menu.js
   Part 8B
========================================== */

/* ===========================
   OPEN REPORT MENU
=========================== */

function openReportMenu(groupId){

    reportMode = true;
    currentReportGroup = groupId;

    if(groupId === "g4"){

        document.getElementById("loanContent").style.display = "none";

    }else{

        const g = document.getElementById(groupId);

        if(g) g.style.display = "none";

    }

    createReportButtons();

    document.getElementById("reportMenu").style.display = "grid";

}


/* ===========================
   CREATE REPORT BUTTONS
=========================== */

function createReportButtons(){

    const box = document.getElementById("reportMenu");

    if(!box) return;

    box.innerHTML = "";

    reportButtons.forEach(name=>{

        box.innerHTML += `
        <button
            class="report-btn"
            onclick="reportButtonClick('${name}')">

            ${name}

        </button>`;
    });

}


/* ===========================
   REPORT BUTTON CLICK
=========================== */

function reportButtonClick(name){

    if(name === "Back"){

        backReportMenu();

        return;

    }

    alert(name);

}


/* ===========================
   BACK REPORT MENU
=========================== */

function backReportMenu(){

    reportMode = false;

    document.getElementById("reportMenu").style.display = "none";

    if(currentReportGroup === "g4"){

        document.getElementById("loanContent").style.display = "grid";

        return;

    }

    const g = document.getElementById(currentReportGroup);

    if(g){

        g.style.display = "grid";

    }

}


/* ===========================
   MENU CLICK
=========================== */

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
   oneFaMiLe - menu.js
   Part 8C
========================================== */


/* ===========================
   SIDE MENU
=========================== */

function toggleMenu(){

    if(reportMode) return;

    document
        .getElementById("menu")
        .classList.toggle("open");

}

function closeMenu(){

    document
        .getElementById("menu")
        .classList.remove("open");

}


/* ===========================
   POPUP
=========================== */

function showPopup(msg){

    const p = document.getElementById("popup");

    p.innerHTML = msg;

    p.style.display = "block";

    clearTimeout(window.popupTimer);

    window.popupTimer = setTimeout(function(){

        p.style.display = "none";

    },3000);

}


/* ===========================
   EXIT
=========================== */

function showExit(){

    closeMenu();

    showPopup(
        "Scroll from bottom to top to close App"
    );

}


/* ===========================
   CLICK OUTSIDE MENU
=========================== */

document.addEventListener("click",function(e){

    const menu=document.getElementById("menu");

    const btn=document.querySelector(".menu-icon");

    if(
        menu &&
        btn &&
        menu.classList.contains("open") &&
        !menu.contains(e.target) &&
        !btn.contains(e.target)
    ){

        closeMenu();

    }

});


/* ===========================
   ESC KEY
=========================== */

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        if(reportMode){

            backReportMenu();
            return;

        }

        closeMenu();

    }

});


/* ===========================
   BOTTOM NAVIGATION
=========================== */

function initializeNavigation(){

    const home=document.getElementById("homeNav");
    const family=document.getElementById("familyNav");
    const charts=document.getElementById("chartsNav");
    const memory=document.getElementById("memoryNav");
    const reports=document.getElementById("reportsNav");

    if(home){

        home.classList.add("nav-btn");

        home.onclick=function(){

            showHome(this);
            return false;

        };

    }

    if(family){

        family.classList.add("nav-btn");

        family.onclick=function(){

            showGroup("g6",this);
            return false;

        };

    }

    if(charts){

        charts.classList.add("nav-btn");

        charts.onclick=function(){

            showGroup("g8",this);
            return false;

        };

    }

    if(memory){

        memory.classList.add("nav-btn");

        memory.onclick=function(){

            showGroup("g5",this);
            return false;

        };

    }

    if(reports){

        reports.classList.add("nav-btn");

        reports.onclick=function(){

            showGroup("g9",this);
            return false;

        };

    }

}


/* ===========================
   APP INITIALIZE
=========================== */

function initializeApp(){

    alert("1");

    createTopMenu();

    alert("2");

    createCircleMenus();

    alert("3");

    initializeNavigation();

    alert("4");

    changeLanguage();

    alert("5");

    showHome(document.getElementById("homeNav"));

    alert("6");
}


/* ===========================
   WINDOW LOAD
=========================== */

window.addEventListener("load",initializeApp);
