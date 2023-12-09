
let homescoreEl = document.getElementById("homescore-el");
let guestscoreEl = document.getElementById("guestscore-el");
let counth = 0;
let countg = 0;
function incrementbyoneh() {
    counth += 1;
    homescoreEl.innerText = counth;
}
function incrementbytwoh() {
    counth += 2
    homescoreEl.innerText = counth;
}
function incrementbythreeh() {
    counth += 3
    homescoreEl.innerText = counth;
}

function incrementbyoneg() {
    countg += 1;
    guestscoreEl.innerText = countg;
}
function incrementbytwog() {
    countg += 2
    guestscoreEl.innerText = countg;
}
function incrementbythreeg() {
    countg += 3
    guestscoreEl.innerText = countg;
}

