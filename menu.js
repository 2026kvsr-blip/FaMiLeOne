/* ==========================================
   oneFaMiLe V2.0
   menu.js
========================================== */


/* ===========================
   GLOBALS
=========================== */

let reportMode = false;
let currentReportGroup = "";


/* ===========================
   CREATE TOP MENU
=========================== */

function createTopMenu(){

    const row=document.getElementById("topButtons");

    if(!row) return;

    row.innerHTML="";

    topMenu.forEach(item=>{

        row.innerHTML+=`
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

            box.innerHTML+=`
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

    document
    .querySelectorAll(".rect-btn,.nav-btn,.loan-tab-btn")
    .forEach(btn=>btn.classList.remove("active"));

}


/* ===========================
   HIDE ALL
=========================== */

function hideAllPages(){

    document
    .querySelectorAll(".circle-grid")
    .forEach(g=>g.style.display="none");

    document.getElementById("homeMessage").style.display="none";

    document.getElementById("g4").style.display="none";

    document.getElementById("reportMenu").style.display="none";

    document.getElementById("langSelect").style.display="none";

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

    const page=document.getElementById(id);

    if(page){

        page.style.display="grid";

    }

}


/* ===========================
   LOAN TAB
=========================== */

function showLoanSection(id,btn){

    // Reports screen open ఉంటే tab change చేయొద్దు
    if(reportMode){
        return;
    }

    document
    .querySelectorAll(".loan-tab-btn")
    .forEach(b=>b.classList.remove("active"));

    if(btn){
        btn.classList.add("active");
    }

    const loan=document.getElementById("loanContent");

    loan.innerHTML=document.getElementById(id).innerHTML;

    loan.style.display="grid";

}

/* ===========================
   MENU CLICK
=========================== */

function menuClick(action){

    if(reportMode){

        return;

    }

    if(isReportAction(action)){

        switch(action){
case "expenseReports":

    openReportMenu("g1","Expenses Reports");
    return;

case "sensitiveExpense":

    openReportMenu("g1","Expenses Sensitive Reports");
    return;

case "allExpenseReports":

    openReportMenu("g1","Expenses All Reports");
    return;
         


              
case "activityReports":

    openReportMenu("g2","Activities Reports");
    return;

case "sensitiveActivity":

    openReportMenu("g2","Activities Sensitive Reports");
    return;

case "allActivityReports":

    openReportMenu("g2","Activities All Reports");
    return;



          case "healthReports":

    openReportMenu("g3","Health Reports");
    return;

case "sensitiveHealth":

    openReportMenu("g3","Health Sensitive Reports");
    return;

case "allHealthReports":

    openReportMenu("g3","Health All Reports");
    return;


              
case "memoryReports":

    openReportMenu("g5","Memories Reports");
    return;

case "sensitiveMemory":

    openReportMenu("g5","Memories Sensitive Reports");
    return;

case "allMemoryReports":

    openReportMenu("g5","Memories All Reports");
    return;


              
           case "incomeReports":

    openReportMenu("g10","Income Reports");
    return;

case "sensitiveIncome":

    openReportMenu("g10","Income Sensitive Reports");
    return;

case "allIncomeReports":

    openReportMenu("g10","Income All Reports");
    return;
              
           case "loanReports":

    openReportMenu("g4","Loans Reports");
    return;

case "sensitiveLoan":

    openReportMenu("g4","Loans Sensitive Reports");
    return;

case "allLoanReports":

    openReportMenu("g4","Loans All Reports");
    return;


              
            case "paymentReports":

    openReportMenu("g4","Payments Reports");
    return;

case "sensitivePayment":

    openReportMenu("g4","Payments Sensitive Reports");
    return;

case "allPaymentReports":

    openReportMenu("g4","Payments All Reports");
    return;
        }

    }

    showPopup(action);

}


/* ===========================
   SIDE MENU
=========================== */

function toggleMenu(){

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

    const p=document.getElementById("popup");

    p.innerHTML=msg;

    p.style.display="block";

    clearTimeout(window.popupTimer);

    window.popupTimer=setTimeout(()=>{

        p.style.display="none";

    },2500);

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
   NAVIGATION
=========================== */

function initializeNavigation(){

    homeNav.onclick=function(){

        showHome(this);

        return false;

    };

    familyNav.onclick=function(){

        showGroup("g6",this);

        return false;

    };

    chartsNav.onclick=function(){

        showGroup("g8",this);

        return false;

    };

    memoryNav.onclick=function(){

        showGroup("g5",this);

        return false;

    };

    reportsNav.onclick=function(){

        showGroup("g9",this);

        return false;

    };

    document
    .querySelectorAll(".bottom-nav a")
    .forEach(a=>a.classList.add("nav-btn"));

}


/* ===========================
   LOAD
=========================== */

window.addEventListener("load",()=>{

    createTopMenu();

    createCircleMenus();

    initializeNavigation();

    changeLanguage();

    showHome(document.getElementById("homeNav"));

});
