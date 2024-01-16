// Change Background colours

function changeBG(elementID) {
    let element = document.getElementById(elementID);
    element.style.backgroundColor = element.style.backgroundColor === 'darkblue' ? '' : 'darkblue';
}
// Change BANNER with mouse hover

function changeText(element) {
    element.innerText = "Welcome";
    element.style.color = 'yellow';
}

function origText(element) {
    element.innerText = "BANNER";
    element.style.color = "white";
}
// Change BODY text colour

function changeTextColor(elementID) { 
    let element = document.getElementById(elementID);
    element.style.color = element.style.color === 'red' ? '' : 'red';

}

// Bonus
const sb1 = document.getElementById('sb1');
const sb2 = document.getElementById('sb2');
let isToggled = true;


function toggleOrder() {

    if(isToggled) {
        sb1.innerText = "Sub-Body 2";
        sb2.innerText = "Sub-Body 1";
        sb1.style.backgroundColor = "olivedrab";
        sb2.style.backgroundColor = "olive";

    }
    else {
        sb1.innerText = "Sub-Body 1";
        sb2.innerText = "Sub-Body 2";
        sb1.style.backgroundColor = "olive";
        sb2.style.backgroundColor = "olivedrab";

    }
    isToggled = !isToggled;
}
   