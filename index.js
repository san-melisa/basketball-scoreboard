let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0


function increaseHomeBy(amount) 
{
    homeScore += amount
    homeEl.textContent = homeScore
}

function increaseGuestBy(amount) 
{
    guestScore += amount
    guestEl.textContent = guestScore
}


function reset() 
{
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}
    

