
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

    inputs.forEach(input => {
        const lowResponse = input.value >0 && input.value <= 33 
        const medResponse = input.value >=34 && input.value <= 66
        const highResponse = input.value >=67 && input.value <= 100
    
        console.log(input.value + input.name)
    
        if (lowResponse){
        console.log(input.name+"lowResponse")
        }
        if(medResponse){
        console.log(input.name+"midResponse")
        }
        if(highResponse){
        console.log(input.name+"highResponse")
        }
    })
}



submitButton.addEventListener("click",submit)

