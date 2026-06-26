/* ==========================
   menu.js - Part 5A
========================== */

/* Generate Top Menu */
function createTopMenu() {

    const row = document.getElementById("topMenu");

    row.innerHTML = "";

    topMenu.forEach(item => {

        row.innerHTML += `
        <a href="#"
           class="rect-btn"
           onclick="showGroup('${item.id}',this);return false;">

            <img src="${item.img}">
            <span>${item.text}</span>

        </a>
        `;

    });

}

/* Generate Circle Buttons */

function createCircleMenus(){

    for(const id in menuData){

        const box=document.getElementById(id);

        if(!box) continue;

        box.innerHTML="";

        menuData[id].forEach(item=>{

            box.innerHTML+=`

            <a href="#"

               class="circle-item"

               onclick="menuClick('${item.action}');return false;">

                <div class="circle">

                    <img src="${item.img}">

                </div>

                <span>${item.text}</span>

            </a>

            `;

        });

    }

}


/* Home */

function showHome(btn){

    clearActive();

    if(btn) btn.classList.add("active");

    hideAllPages();

    document.getElementById("homeMessage").style.display="block";

    document.getElementById("langSelect").style.display="block";

}


/* Hide Everything */

function hideAllPages(){

    document.querySelectorAll(".circle-grid")

    .forEach(g=>g.style.display="none");

    document.getElementById("g4").style.display="none";

    document.getElementById("reportMenu").style.display="none";

    document.getElementById("homeMessage").style.display="none";

    document.getElementById("langSelect").style.display="none";

}


/* Remove Active */

function clearActive(){

document.querySelectorAll(".rect-btn,.nav-btn,.loan-tab-btn")

.forEach(btn=>btn.classList.remove("active"));

}


/* Open Group */

function showGroup(id,btn){

clearActive();

if(btn) btn.classList.add("active");

hideAllPages();

if(id==="g4"){

document.getElementById("g4").style.display="block";

showLoanSection("g11",document.getElementById("loanBtn"));

}

else{

document.getElementById(id).style.display="grid";

}

}


/* Loan Section */

function showLoanSection(id,btn){

document.querySelectorAll(".loan-tab-btn")

.forEach(b=>b.classList.remove("active"));

if(btn) btn.classList.add("active");

const loan=document.getElementById("loanContent");

loan.innerHTML=document.getElementById(id).innerHTML;

loan.style.display="grid";

}


/* Side Menu */

function toggleMenu(){

document.getElementById("menu")

.classList.toggle("open");

}


/* Exit Popup */

function showExit(){

document.getElementById("menu")

.classList.remove("open");

const p=document.getElementById("popup");

p.innerHTML="Scroll from bottom to top to close App";

p.style.display="block";

setTimeout(()=>{

p.style.display="none";

},3000);

}


/* Default */

window.onload=function(){

createTopMenu();

createCircleMenus();

showHome(document.querySelector(".nav-btn"));

changeLanguage();

};
