/* ==========================================
   oneFaMiLe V2.0
   language.js
========================================== */

const languageData = {

en:{

welcomeTitle:"Welcome",

welcomeContent:
"Welcome to oneFaMiLe.\n\nManage Expenses, Activities, Health, Loans, Income, Memories and Family information in one place."

},

te:{

welcomeTitle:"స్వాగతం",

welcomeContent:
"oneFaMiLe కు స్వాగతం.\n\nఖర్చులు, కార్యకలాపాలు, ఆరోగ్యం, రుణాలు, ఆదాయం, జ్ఞాపకాలు మరియు కుటుంబ సమాచారాన్ని ఒకే చోట నిర్వహించండి."

},

hi:{

welcomeTitle:"स्वागत है",

welcomeContent:
"oneFaMiLe में आपका स्वागत है।"

},

ta:{

welcomeTitle:"வரவேற்கிறோம்",

welcomeContent:
"oneFaMiLe-க்கு வரவேற்கிறோம்."

},

kn:{

welcomeTitle:"ಸ್ವಾಗತ",

welcomeContent:
"oneFaMiLe ಗೆ ಸ್ವಾಗತ."

},

ml:{

welcomeTitle:"സ്വാഗതം",

welcomeContent:
"oneFaMiLe ലേക്ക് സ്വാഗതം."

}

};


/* ===========================
   CHANGE LANGUAGE
=========================== */

function changeLanguage(){

const lang=document.getElementById("langSelect").value;

const data=languageData[lang] || languageData.en;

document.getElementById("welcomeTitle").innerHTML=
data.welcomeTitle;

document.getElementById("welcomeContent").innerHTML=
data.welcomeContent.replace(/\n/g,"<br>");

}


/* ===========================
   INITIALIZE LANGUAGE
=========================== */

window.addEventListener("load",function(){

const lang=document.getElementById("langSelect");

if(lang){

lang.value="en";

}

changeLanguage();

});
