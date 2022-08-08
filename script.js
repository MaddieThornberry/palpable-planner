// date
var currentDayEl = document.querySelector("#current-day");

currentDayEl = moment();

// event input 



// save button
// change later from print - button works so leaving it as is for now
const saveBtn = document.querySelector(".save-btn")

function saveEvent() {
    window.print()
}

saveBtn.addEventListener("click", saveEvent)
console.log('saved')

// past and future function



// 

