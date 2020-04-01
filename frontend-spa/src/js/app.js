
const anxiousInput = document.querySelector(".anxious_input").value
const lonelyInput = document.querySelector(".lonely_input").value
const depressedInput = document.querySelector(".depressed_input").value
const overwhelmedInput = document.querySelector(".overwhelmed_input").value
const angryInput = document.querySelector(".angry_input").value
const sadInput = document.querySelector(".sad_input").value
const exhaustedInput = document.querySelector(".exhausted_input").value
const submitButton = document.querySelector(".submit-button")
const calendarButton = document.querySelector(".calendar_button")
const helpButton = document.querySelector(".help_button")

const submit = () =>{
console.log("submitPress")
console.log(anxiousInput.value)
}

calendarButton.addEventListener("click",submit)
submitButton.addEventListener("click",submit)
helpButton.addEventListener("click",submit)