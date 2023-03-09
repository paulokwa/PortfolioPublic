let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEL = document.getElementById("home-score")
let guestStoreEL = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeStoreEL.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEL.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEL.textContent = homeScore


}


function increaseGuestScoreOne() {
    guestScore += 1
    guestStoreEL.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestStoreEL.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestStoreEL.textContent = guestScore
}


function resetScore() {

    homeScore = 0
    guestScore = 0

    homeStoreEL.textContent = homeScore

    guestStoreEL.textContent = guestScore


}