let homeScore = 0
let guestScore = 0
document.getElementById("homescore").textContent = homeScore
document.getElementById("guestscore").textContent = guestScore

function add1h() {
    homeScore += 1
    homescore.textContent = homeScore
}

function add2h() {
    homeScore += 2
    homescore.textContent = homeScore
}

function add3h() {
    homeScore += 3
    homescore.textContent = homeScore
}

function add1g() {
    guestScore += 1
    guestscore.textContent = guestScore
}

function add2g() {
    guestScore += 2
    guestscore.textContent = guestScore
}

function add3g() {
    guestScore += 3
    guestscore.textContent = guestScore
}

function reset() {
    homescore.textContent = 0
    guestscore.textContent = 0
}