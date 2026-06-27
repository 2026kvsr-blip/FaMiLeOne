/* ==========================================
   app.js
========================================== */

/* ---------- Initialize App ---------- */

function initializeApp() {

    /* Top Menu */
    if (typeof createTopMenu === "function") {
        createTopMenu();
    }

    /* Circle Menus */
    if (typeof createCircleMenus === "function") {
        createCircleMenus();
    }

    /* Home Page */
    if (typeof showHome === "function") {
        showHome();
    }

    /* Language */
    if (typeof changeLanguage === "function") {
        changeLanguage();
    }

    /* Loan Buttons */
    const loanBtn = document.getElementById("loanBtn");
    const paymentBtn = document.getElementById("paymentBtn");

    if (loanBtn) {
        loanBtn.onclick = function () {
            showLoanSection("g11", this);
        };
    }

    if (paymentBtn) {
        paymentBtn.onclick = function () {
            showLoanSection("g7", this);
        };
    }

    /* Bottom Navigation */

    const home = document.getElementById("homeNav");
    if (home) {
        home.onclick = function (e) {
            e.preventDefault();
            showHome(this);
        };
    }

    const family = document.getElementById("familyNav");
    if (family) {
        family.onclick = function (e) {
            e.preventDefault();
            showGroup("g6", this);
        };
    }

    const charts = document.getElementById("chartsNav");
    if (charts) {
        charts.onclick = function (e) {
            e.preventDefault();
            showGroup("g8", this);
        };
    }

    const memories = document.getElementById("memoryNav");
    if (memories) {
        memories.onclick = function (e) {
            e.preventDefault();
            showGroup("g5", this);
        };
    }

    const reports = document.getElementById("reportsNav");
    if (reports) {
        reports.onclick = function (e) {
            e.preventDefault();
            showGroup("g9", this);
        };
    }

}

/* ---------- Start App ---------- */

window.addEventListener("load", initializeApp);
