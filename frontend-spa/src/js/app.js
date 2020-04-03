
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

const lowDepressedResponse = () => {
    console.log("lowDepressedResponse")
}
const midDepressedResponse = () => {
    console.log("midDepressedResponse")
}
const highDepressedResponse = () => {
    console.log("highDepressedResponse")
}

const lowAngryResponse = () => {
    console.log("lowAngryResponse")
}
const midAngryResponse = () => {
    console.log("midAngryResponse")
}
const highAngryResponse = () => {
    console.log("highAngryResponse")
}

const lowSadResponse = () => {
    console.log("lowSadResponse")
}
const midSadResponse = () => {
    console.log("midSadResponse")
}
const highSadResponse = () => {
    console.log("highSadResponse")
}

const lowLonelyResponse = () => {
    console.log("lowLonelyResponse")
}
const midLonelyResponse = () => {
    console.log("midLonelyResponse")
}
const highLonelyResponse = () => {
    console.log("highLonelyResponse")
}

const lowExhaustedResponse = () => {
    console.log("lowExhaustedResponse")
}
const midExhaustedResponse = () => {
    console.log("midExhaustedResponse")
}
const highExhaustedResponse = () => {
    console.log("highExhaustedResponse")
}

const lowOverwhelmedResponse = () => {
    console.log("lowOverwhelmedResponse")
}
const midOverwhelmedResponse = () => {
    console.log("midOverwhelmedResponse")
}
const highOverwhelmedResponse = () => {
    console.log("highOverwhelmedResponse")
}

const lowRejectedResponse = () => {
    console.log("lowRejectedResponse")
}
const midRejectedResponse = () => {
    console.log("midRejectedResponse")
}
const highRejetedResponse = () => {
    console.log("highRejectedResponse")
}

const submit = () =>{

        console.log("submitPress")

    inputs.forEach(input => {
        const lowResponse = input.value >0 && input.value <= 33
        const medResponse = input.value >=34 && input.value <= 66
        const highResponse = input.value >=67 && input.value <= 100
    
        console.log(input.value + input.name)
    
        if (lowResponse){
            let lowResponse = ""
            switch(input.name){
                case "anxious": lowResponse = "whatever low response"
                break
                case "depressed": lowResponse = "whatever depressed"
                break
                case "lonely": lowResponse = "im alone!"
                break
                case "angry": lowResponse = "take a breather"
                break
                case "overwhelmed": lowResponse = "take a walk"
                break
                case "sad": lowResponse = "go to a pet store"
                break
                case "rejected": lowResponse = "call a family member"
                break
                case "exhausted": lowResponse = "go for a drive"
                break
            }
            console.log(lowResponse)
        }
        if(medResponse){
        }
        if(highResponse){
        }
    })
}

submitButton.addEventListener("click",submit)