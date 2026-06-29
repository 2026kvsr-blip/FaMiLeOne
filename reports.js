/* ==========================================
   oneFaMiLe V4
   reports.js
   PART-1
========================================== */


/* ===========================
   REPORT VARIABLES
=========================== */

let currentReportType="";

let currentReportTitle="";

let currentReportSource=[];

let reportResult=[];


/* ===========================
   OPEN REPORT
=========================== */

function openReport(type,title,data){

    currentReportType=type;

    currentReportTitle=title;

    currentReportSource=data;

}


/* ===========================
   TODAY
=========================== */

function todayReport(){

    alert(currentReportTitle+"\n\nToday Report");

}


/* ===========================
   WEEK
=========================== */

function weekReport(){

    alert(currentReportTitle+"\n\nWeek Report");

}


/* ===========================
   MONTH
=========================== */

function monthReport(){

    alert(currentReportTitle+"\n\nMonth Report");

}


/* ===========================
   YEAR
=========================== */

function yearReport(){

    alert(currentReportTitle+"\n\nYear Report");

}


/* ===========================
   DAILY
=========================== */

function dailyReport(){

    alert(currentReportTitle+"\n\nDaily Report");

}


/* ===========================
   MONTHLY
=========================== */

function monthlyReport(){

    alert(currentReportTitle+"\n\nMonthly Report");

}


/* ===========================
   YEARLY
=========================== */

function yearlyReport(){

    alert(currentReportTitle+"\n\nYearly Report");

}


/* ===========================
   ABSTRACT
=========================== */

function abstractReport(){

    alert(currentReportTitle+"\n\nAbstract Report");

}
/* ==========================================
   oneFaMiLe V4
   reports.js
   PART-2
========================================== */


/* ===========================
   LOAD REPORT
=========================== */

function loadReport(type){

    switch(type){

        case "Today Report":
            todayReport();
            break;

        case "This Week Report":
            weekReport();
            break;

        case "This Month Report":
            monthReport();
            break;

        case "This Year Report":
            yearReport();
            break;

        case "Daily Report":
            dailyReport();
            break;

        case "Monthly Report":
            monthlyReport();
            break;

        case "Yearly Report":
            yearlyReport();
            break;

        case "Report Abstract":
            abstractReport();
            break;

    }

}


/* ===========================
   SHOW REPORT
=========================== */

function showReport(title,data){

    reportResult=data;

    let msg="";

    if(data.length===0){

        msg="No Records Found";

    }else{

        data.forEach((r,i)=>{

            msg+=(i+1)+". "+JSON.stringify(r)+"\n";

        });

    }

    alert(title+"\n\n"+msg);

}


/* ===========================
   FILTER BY DATE
=========================== */

function filterByDate(records,dateField,targetDate){

    return records.filter(r=>{

        return r[dateField]===targetDate;

    });

}


/* ===========================
   FILTER BY MONTH
=========================== */

function filterByMonth(records,dateField,month){

    return records.filter(r=>{

        if(!r[dateField]) return false;

        return r[dateField].substring(5,7)===month;

    });

}


/* ===========================
   FILTER BY YEAR
=========================== */

function filterByYear(records,dateField,year){

    return records.filter(r=>{

        if(!r[dateField]) return false;

        return r[dateField].substring(0,4)===year;

    });

}


/* ===========================
   FILTER BETWEEN DATES
=========================== */

function filterBetween(records,dateField,from,to){

    return records.filter(r=>{

        if(!r[dateField]) return false;

        return r[dateField]>=from &&
               r[dateField]<=to;

    });

}


/* ===========================
   REPORT TOTAL
=========================== */

function reportTotal(records,field){

    let total=0;

    records.forEach(r=>{

        total+=Number(r[field]||0);

    });

    return total;

}


/* ==========================================
   oneFaMiLe V4
   reports.js
   PART-3
========================================== */


/* ===========================
   EXPENSE REPORTS
=========================== */

function expenseReport(records){

    showReport(

        "Expenses Report",

        records

    );

}


/* ===========================
   INCOME REPORTS
=========================== */

function incomeReport(records){

    showReport(

        "Income Report",

        records

    );

}


/* ===========================
   HEALTH REPORTS
=========================== */

function healthReport(records){

    showReport(

        "Health Report",

        records

    );

}


/* ===========================
   ACTIVITY REPORTS
=========================== */

function activityReport(records){

    showReport(

        "Activities Report",

        records

    );

}


/* ===========================
   LOAN REPORTS
=========================== */

function loanReport(records){

    showReport(

        "Loans Report",

        records

    );

}


/* ===========================
   PAYMENT REPORTS
=========================== */

function paymentReport(records){

    showReport(

        "Payments Report",

        records

    );

}


/* ===========================
   MEMORY REPORTS
=========================== */

function memoryReport(records){

    showReport(

        "Memories Report",

        records

    );

}


/* ===========================
   REPORT SUMMARY
=========================== */

function reportSummary(records, amountField){

    const total = reportTotal(records, amountField);

    alert(

        "Total Records : " +

        records.length +

        "\n\nTotal Amount : " +

        total

    );

}


/* ===========================
   EXPORT PLACEHOLDER
=========================== */

function exportPDF(){

    alert("PDF Export Coming Soon");

}

function exportExcel(){

    alert("Excel Export Coming Soon");

}


/* ===========================
   PRINT PLACEHOLDER
=========================== */

function printReport(){

    window.print();

}
/* ==========================================
   oneFaMiLe V4
   reports.js
   PART-4 (FINAL)
========================================== */


/* ===========================
   REPORT DISPATCHER
=========================== */

function runModuleReport(module, records){

    switch(module){

        case "Expenses":
            expenseReport(records);
            break;

        case "Income":
            incomeReport(records);
            break;

        case "Health":
            healthReport(records);
            break;

        case "Activities":
            activityReport(records);
            break;

        case "Loans":
            loanReport(records);
            break;

        case "Payments":
            paymentReport(records);
            break;

        case "Memories":
            memoryReport(records);
            break;

        default:
            showReport(module + " Report", records);

    }

}


/* ===========================
   GET CURRENT REPORT
=========================== */

function getCurrentReport(){

    return{

        module:currentModule,

        type:currentReportType,

        title:currentReportTitle,

        records:reportResult

    };

}


/* ===========================
   CLEAR REPORT
=========================== */

function clearReport(){

    currentReportType="";

    currentReportTitle="";

    currentReportSource=[];

    reportResult=[];

}


/* ===========================
   REPORT INFORMATION
=========================== */

function reportInformation(){

    alert(

        "oneFaMiLe Version 4\n\n"+

        "Current Module : "+currentModule+

        "\nReport : "+currentReportTitle+

        "\nRecords : "+reportResult.length

    );

}


/* ===========================
   REPORT STATISTICS
=========================== */

function reportStatistics(records){

    return{

        totalRecords:records.length,

        created:new Date().toLocaleString()

    };

}


/* ===========================
   REPORT SEARCH
=========================== */

function searchReport(records, field, value){

    value=String(value).toLowerCase();

    return records.filter(item=>{

        return String(item[field] || "")

            .toLowerCase()

            .includes(value);

    });

}


/* ===========================
   SORT REPORT
=========================== */

function sortReport(records, field){

    return [...records].sort((a,b)=>{

        if(a[field] < b[field]) return -1;

        if(a[field] > b[field]) return 1;

        return 0;

    });

}


/* ===========================
   REPORT INITIALIZATION
=========================== */

function initializeReports(){

    clearReport();

    console.log(

        "Reports Engine Initialized"

    );

}


/* ===========================
   AUTO START
=========================== */

document.addEventListener(

    "DOMContentLoaded",

    initializeReports

);


/* ==========================================
   END OF reports.js
========================================== */
