/* =====================================

oneFaMiLe V1
Part 1.1C

===================================== */


/* LOGIN */

const loginBtn =
document.getElementById("loginBtn");

const signupBtn =
document.getElementById("signupBtn");

const loginArea =
document.getElementById("loginArea");

const signupArea =
document.getElementById("signupArea");


loginBtn.addEventListener(

"click",

() => {

loginArea.classList.remove(

"hidden"

);

signupArea.classList.add(

"hidden"

);

}

);



signupBtn.addEventListener(

"click",

() => {

signupArea.classList.remove(

"hidden"

);

loginArea.classList.add(

"hidden"

);

}

);



/* ======================

MENU

====================== */

const menuBtn =

document.querySelector(

".menu-btn"

);


const menuPanel =

document.getElementById(

"menuPanel"

);



menuBtn.addEventListener(

"click",

() => {

menuPanel.classList.toggle(

"hidden"

);

}

);



/* ======================

EXIT

====================== */


const exitBtn =

document.getElementById(

"exitBtn"

);


const exitMessage =

document.getElementById(

"exitMessage"

);



exitBtn.addEventListener(

"click",

() => {


menuPanel.classList.add(

"hidden"

);


exitMessage.classList.remove(

"hidden"

);



setTimeout(

() => {

exitMessage.classList.add(

"hidden"

);

},

3000

);


}

);



/* ======================

BOTTOM BUTTONS

====================== */

const bottomButtons =

document.querySelectorAll(

".bottom-btn"

);



bottomButtons.forEach(

(button)=>{


button.addEventListener(

"click",

()=>{


bottomButtons.forEach(

b =>

b.classList.remove(

"active"

)

);


button.classList.add(

"active"

);


});


});



/* ======================

TOP BUTTONS

====================== */


const moduleButtons =

document.querySelectorAll(

".module-btn"

);



moduleButtons.forEach(

(button)=>{


button.addEventListener(

"click",

()=>{


moduleButtons.forEach(

b =>

b.classList.remove(

"active"

)

);


button.classList.add(

"active"

);


});


});



/* ======================

LANGUAGE

====================== */


const lang =

document.getElementById(

"lang"

);



lang.addEventListener(

"change",

function(){


const selected =

this.value;


console.log(

"Language : " +

selected

);


});


/* ======================

HOME DEFAULT

====================== */


document.querySelector(

".bottom-btn"

)

.classList.add(

"active"

);




/* ======================

PLACEHOLDER PAGES

====================== */

const homePage =

document.getElementById(

"homePage"

);



bottomButtons.forEach(

(btn)=>{


btn.addEventListener(

"click",

()=>{


homePage.innerHTML =

`<h3>

${btn.textContent}

PAGE

</h3>`;


});


});




/* ======================

TOP BUTTON PLACEHOLDER

====================== */


moduleButtons.forEach(

(btn)=>{


btn.addEventListener(

"click",

()=>{


homePage.innerHTML =

`<h3>

${btn.textContent}

MODULE

</h3>`;


});


});



/* ======================

END

====================== */
