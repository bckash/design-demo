
// const

// const butWearBlack = document.getElementById("w-b");
// const butWearWhite = document.getElementById("w-w");
// const butWearDes = document.getElementById("w-des");
// const butWearDet = document.getElementById("w-det");
const butNav = document.getElementById("nav-up--but")

// const secWear = document.getElementsByClassName("wear-js");

const ulNavUp = document.getElementById("n-up-main");
const ulNavUpChildren = document.getElementsByClassName("um");
// const dodWearCont = document.getElementById("dod-wear__cont");

let gNextindex = 0;
let currentNE = ulNavUp.firstElementChild;
let currentNEall = Array.from(ulNavUpChildren);


// EL

// butWearBlack.addEventListener("click", function(){turnOn(secWear, "dw-black")});
// butWearWhite.addEventListener("click", function(){turnOn(secWear, "dw-white")});
// butWearDes.addEventListener("click", function(){turnOn(secWear, "dw-design")});
// butWearDet.addEventListener("click", function(){turnOn(secWear, "dw-detail")});

butNav.addEventListener("click", goNext)


// () =>

// round buttons in "dod wear"
// function turnOn(collection, ID) {
    
//     const arr = Array.from(collection);

//     for (let i=0; i < arr.length; i++) {

//         if (arr[i].id === ID) {
//             arr[i].style.display = "block"
//         } else {
//             arr[i].style.display = "none";
//         }
//     } 
// }

// chevron button
function goNext (e) {
    gNextindex += 1;
    next(e);
}

function next() {


    // if (currentNE.id === "pdec") {
    //     dodWearCont.style.display = "block"
    // } else {
    //     dodWearCont.style.display = "none"
    // }

    // curent "Li" visible, rest NOT
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