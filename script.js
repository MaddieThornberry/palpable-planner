// date
var today = new Date();document.write
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log('today')
/*
currentDay = moment();
*/
/*
let today = newDate().toLocaleDateString()
console.log(today)*/
// event input 
// handled by input tags in the HTML



// save button
// change later from print - button works so leaving it as is for now
const saveBtn = document.querySelector(".save-btn")

function saveEvent() {
    document.getElementById('saveBtn').write = document.getElementById('eventContent').value;
}
/*
saveBtn.addEventListener("click", saveEvent)
console.log('SAVED!')
 */
// past and future function
var pastEvent = document.getElementById('past-event');

function pastEvent() {


}




// input as text, save button clicked, text saved, color changes to green, color changes to red once event has past.

