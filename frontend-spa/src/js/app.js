
const anxiousInput = document.querySelector(".anxious_input")
const lonelyInput = document.querySelector(".lonely_input")
const depressedInput = document.querySelector(".depressed_input")
const overwhelmedInput = document.querySelector(".overwhelmed_input")
const angryInput = document.querySelector(".angry_input")
const sadInput = document.querySelector(".sad_input")
const exhaustedInput = document.querySelector(".exhausted_input")
const submitButton = document.querySelector(".submit-button")
const calendarButton = document.querySelector(".calendar_button")
const helpButton = document.querySelector(".help_button")

const inputs = document.querySelectorAll(".slider_input")

const lowAnxiousResponse = () => {
    console.log("lowAnxiousResponse")
}
const midAnxiousResponse = () => {
    console.log("midAnxiousResponse")
}
const highAnxiousResponse = () => {
    console.log("highAnxiousResponse")
}





const submit = () =>{
console.log("submitPress")
console.log(anxiousInput.value)
inputs.forEach(input => {if(input.value >0 && input.value <= 33){
    console.log(input.name+"lowResponse")
}
if(input.value >=34 && input.value <= 66){
    console.log(input.name+"midResponse")
}
if(input.value >=67 && input.value <= 100){
    console.log(input.name+"highResponse")
}

})
// if(anxiousInput.value >0 && anxiousInput.value <= 33 ){
//     lowAnxiousResponse()
// }
// if(anxiousInput.value >=34 && anxiousInput.value <= 66 ){
//     midAnxiousResponse()
// }
// if(anxiousInput.value >= 67 && anxiousInput.value <= 100){
//     highAnxiousResponse()
// }

// console.log(angryInput.value)
// if(angryInput.value >0 && angryInput.value <= 33 ){
//     lowAngryResponse()
// }
// if(anxiousInput.value >=34 && anxiousInput.value <= 66 ){
//     midAngryResponse()
// }
// if(anxiousInput.value >= 67 && anxiousInput.value <= 100){
//     highAngryResponse()
// }
}



calendarButton.addEventListener("click",submit)
submitButton.addEventListener("click",submit)
helpButton.addEventListener("click",submit)