const midRowTwo = document.querySelector(".mid-row-two")
const anxiousInput = document.querySelector(".anxious_input")
const lonelyInput = document.querySelector(".lonely_input")
const depressedInput = document.querySelector(".depressed_input")
const overwhelmedInput = document.querySelector(".overwhelmed_input")
const angryInput = document.querySelector(".angry_input")
const sadInput = document.querySelector(".sad_input")
const exhaustedInput = document.querySelector(".exhausted_input")
const submitButton = document.querySelector(".submit-button")
const singleDays = document.querySelectorAll(".calendar_day")
const helpButton = document.querySelector(".help_button")
const colMid = document.querySelector(".col-mid")
const inputs = document.querySelectorAll(".slider_input")


let anxiousResponse = ""
let depressedResponse = ""
let lonelyResponse = ""
let sadResponse = ""
let overwhelmedResponse = ""
let angryResponse = ""
let rejectedResponse = ""
let exhaustedResponse = ""
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const submit = () => {

    console.log("submitPress")

    colMid.innerHTML = `<div class="card__container"></div>`
    const cardAnchor = document.querySelector(".card__container")

    inputs.forEach(input => {

        const lowResponse = input.value > 0 && input.value <= 33
        const medResponse = input.value >= 34 && input.value <= 66
        const highResponse = input.value >= 67 && input.value <= 100
        const card = document.createElement("div")
        card.classList.add("card")


        console.log(input.value + input.name)

        if (lowResponse) {
            let lowResponse = ""
            switch (input.name) {
                case "anxious":
                    lowResponse = "whatever low response"
                    anxiousResponse = "low"
                    break
                case "depressed":
                    lowResponse = "whatever depressed"
                    depressedResponse = "low"
                    break
                case "lonely":
                    lowResponse = "im alone!"
                    lonelyResponse = "low"
                    break
                case "angry":
                    lowResponse = "take a breather"
                    angryResponse = "low"
                    break
                case "overwhelmed":
                    lowResponse = "take a walk"
                    overwhelmedResponse = "low"
                    break
                case "sad":
                    lowResponse = "go to a pet store"
                    sadResponse = "low"
                    break
                case "rejected":
                    lowResponse = "call a family member"
                    rejectedResponse = "low"
                    break
                case "exhausted":
                    lowResponse = "go for a drive"
                    exhaustedResponse = "low"
                    break
            }
            card.innerText = lowResponse
            cardAnchor.appendChild(card)
        }
        if (medResponse) {
            let medResponse = ""
            switch (input.name) {
                case "anxious":
                    medResponse = "whatever low response"
                    anxiousResponse = "med"
                    break
                case "depressed":
                    medResponse = "whatever depressed"
                    depressedResponse = "med"
                    break
                case "lonely":
                    medResponse = "im alone!"
                    lonelyResponse = "med"
                    break
                case "angry":
                    medResponse = "take a breather"
                    angryResponse = "med"
                    break
                case "overwhelmed":
                    medResponse = "take a walk"
                    overwhelmedResponse = "med"
                    break
                case "sad":
                    medResponse = "go to a pet store"
                    sadResponse = "med"
                    break
                case "rejected":
                    medResponse = "call a family member"
                    rejectedResponse = "med"
                    break
                case "exhausted":
                    medResponse = "go for a drive"
                    exhaustedResponse = "med"
                    break
            }
            card.innerText = medResponse
            cardAnchor.appendChild(card)
        }
        if (highResponse) {
            let highResponse = ""
            switch (input.name) {
                case "anxious":
                    highResponse = "whatever low response"
                    anxiousResponse = "high"
                    break
                case "depressed":
                    highResponse = "whatever depressed"
                    depressedResponse = "high"
                    break
                case "lonely":
                    highResponse = "im alone!"
                    lonelyResponse = "high"
                    break
                case "angry":
                    highResponse = "take a breather"
                    angryResponse = "high"
                    break
                case "overwhelmed":
                    highResponse = "take a walk"
                    overwhelmedResponse = "high"
                    break
                case "sad":
                    highResponse = "go to a pet store"
                    sadResponse = "high"
                    break
                case "rejected":
                    highResponse = "call a family member"
                    rejectedResponse = "high"
                    break
                case "exhausted":
                    highResponse = "go for a drive"
                    exhaustedResponse = "high"
                    break
            }
            card.innerText = highResponse
            cardAnchor.appendChild(card)
        }

    })f

    const newSubmitJson = {
        "anxious": anxiousResponse,
        "depressed": depressedResponse,
        "lonely": lonelyResponse,
        "angry": angryResponse,
        "overwhelmed": overwhelmedResponse,
        "sad": sadResponse,
        "rejected": rejectedResponse,
        "exhausted": exhaustedResponse,
        "month": month,
        "day": day,
        "year": year,
    }
    console.log("Submit JSON : " + newSubmitJson)
    fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSubmitJson)
    })

}





submitButton.addEventListener("click", submit)