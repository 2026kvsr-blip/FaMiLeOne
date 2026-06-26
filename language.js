/* ==========================================
   oneFaMiLe - language.js
========================================== */

const languages = {

en:{

title:"Welcome to oneFaMiLe",

content:`

<p><strong>You can Track your :</strong></p>

<p>

• Income<br>
• Expenses<br>
• Activities<br>
• Loans<br>
• Health<br>
• Family

</p>

<h3>💰 Expenses Management</h3>

<p>

Track your daily expenses and monitor spending easily.

</p>

<ul>

<li>Add income and expenses</li>

<li>Weekly reports</li>

<li>Monthly reports</li>

<li>Sensitive expenses</li>

</ul>

<h3>🏦 Loan Management</h3>

<p>

Manage Loans, Payments and Pending Balances.

</p>

<ul>

<li>Add Loan</li>

<li>Add Payment</li>

<li>Pending Balance</li>

<li>Loan Reports</li>

</ul>

<h3>📋 Activities</h3>

<ul>

<li>Daily Activities</li>

<li>Birthday Reminders</li>

<li>Tasks</li>

</ul>

<h3>❤️ Health</h3>

<ul>

<li>Medicines</li>

<li>Doctor Visits</li>

<li>Reports</li>

</ul>

<h3>👨‍👩‍👧 Family</h3>

<ul>

<li>Family Members</li>

<li>Family Tree</li>

</ul>

<h3>📊 Reports & Charts</h3>

<p>

View reports and charts for all modules.

</p>

`

},



te:{

title:"oneFaMiLe కు స్వాగతం",

content:`

<p><strong>మీరు ట్రాక్ చేయగల అంశాలు :</strong></p>

<p>

• ఆదాయం<br>
• ఖర్చులు<br>
• కార్యకలాపాలు<br>
• రుణాలు<br>
• ఆరోగ్యం<br>
• కుటుంబం

</p>

<h3>💰 ఖర్చుల నిర్వహణ</h3>

<p>

రోజువారీ ఖర్చులను నమోదు చేసి పర్యవేక్షించండి.

</p>

<ul>

<li>ఆదాయం నమోదు</li>

<li>ఖర్చులు నమోదు</li>

<li>వారాంత నివేదికలు</li>

<li>నెలవారీ నివేదికలు</li>

<li>సున్నితమైన ఖర్చులు</li>

</ul>

<h3>🏦 రుణాల నిర్వహణ</h3>

<ul>

<li>రుణాలు నమోదు</li>

<li>చెల్లింపులు నమోదు</li>

<li>మిగిలిన బాకీలు</li>

<li>రుణ నివేదికలు</li>

</ul>

<h3>📋 కార్యకలాపాలు</h3>

<ul>

<li>రోజువారీ పనులు</li>

<li>పుట్టినరోజు గుర్తింపులు</li>

<li>టాస్కులు</li>

</ul>

<h3>❤️ ఆరోగ్యం</h3>

<ul>

<li>మందులు</li>

<li>డాక్టర్ వివరాలు</li>

<li>ఆరోగ్య నివేదికలు</li>

</ul>

<h3>👨‍👩‍👧 కుటుంబం</h3>

<ul>

<li>కుటుంబ సభ్యులు</li>

<li>కుటుంబ వృక్షం</li>

</ul>

<h3>📊 నివేదికలు మరియు చార్టులు</h3>

<p>

అన్ని విభాగాల నివేదికలు మరియు చార్టులు చూడండి.

</p>

`

},

hi:{
title:"oneFaMiLe में आपका स्वागत है",
content:"<p>Coming in next update...</p>"
},

ta:{
title:"oneFaMiLe-க்கு வரவேற்கிறோம்",
content:"<p>Coming in next update...</p>"
},

kn:{
title:"oneFaMiLe ಗೆ ಸ್ವಾಗತ",
content:"<p>Coming in next update...</p>"
},

ml:{
title:"oneFaMiLe ലേക്ക് സ്വാഗതം",
content:"<p>Coming in next update...</p>"
}

};



/* ==========================================
   CHANGE LANGUAGE
========================================== */

function changeLanguage(){

const lang=document.getElementById("langSelect").value;

const data=languages[lang];

document.getElementById("welcomeTitle").innerHTML=data.title;

document.getElementById("welcomeContent").innerHTML=data.content;

}
