
// CONST
//-------

// buttons round
const butWearBlack = document.getElementById("w-b");
const butWearWhite = document.getElementById("w-w");
const butWearDes = document.getElementById("w-des");
const butWearDet = document.getElementById("w-det");

// nav up
const butNav = document.getElementById("nav-up--but")
const ulNavUp = document.getElementById("n-up-main");
const ulNavUpChildren = document.getElementsByClassName("um");

// "dod wear" sections
const secWear = document.getElementsByClassName("wear-js");

// "main menu" content containers
const dodWearCont = document.getElementById("dod-wear__cont");
const analogiaCont = document.getElementById("analogia__cont");
const pdecCont = document.getElementById("pdec__cont");
const brgCont = document.getElementById("brg__cont");
const bcCont = document.getElementById("bc__cont");
const wfdCont = document.getElementById("wfd__cont");

// for "next" (F)
let gNextindex = 0;
let currentNE = ulNavUp.firstElementChild;
let currentNEall = Array.from(ulNavUpChildren);


// EL
//-------

butWearBlack.addEventListener("click", function(){turnOn(secWear, "dw-black")});
butWearWhite.addEventListener("click", function(){turnOn(secWear, "dw-white")});
butWearDes.addEventListener("click", function(){turnOn(secWear, "dw-design")});
butWearDet.addEventListener("click", function(){turnOn(secWear, "dw-detail")});

butNav.addEventListener("click", goNext)


// () =>
//-------


// ROUND BUTTONS in "dod wear"
function turnOn(collection, ID) {
    
    const arr = Array.from(collection);

    for (let i=0; i < arr.length; i++) {

        if (arr[i].id === ID) {
            arr[i].style.display = "block"
        } else {
            arr[i].style.display = "none";
        }
    } 
}

// CHEVRON BUTTON: add index
function goNext (e) {
    e.preventDefault()
    gNextindex += 1;
    next(e);
    e.preventDefault()
}

// CHEVRON BUTTON: change pictures
function next(ev) {

    // (F) on/off for main menu titles
    function onOff (idName, contName){
        
        if (currentNE.id === idName) {
            contName.style.display = "block"
        } else {
            contName.style.display = "none" 
    }
}

    onOff("wfd", dodWearCont)
    onOff("dod", analogiaCont)
    onOff("analogia", pdecCont)
    onOff("pdec", brgCont)
    onOff("brg", bcCont)
    onOff("bc", wfdCont)

    // (F) curent "Li" visible, rest NOT
    function displayChange (a){

        for (let y = 0; y < currentNEall.length; y++) {
            if (currentNEall[y].id === a.id) {
                a.style.display = "block";
            } else {
                currentNEall[y].style.display = "none";         
            }
        }
    }

    if (gNextindex === currentNEall.length) {

        gNextindex = 0;
        after = currentNEall[0];
        displayChange(after); 
        currentNE = after;
        return currentNE;
    } 
    
    else {

        let after = currentNE.nextElementSibling
        displayChange(after);
        currentNE = after;
        return currentNE;
    }

}