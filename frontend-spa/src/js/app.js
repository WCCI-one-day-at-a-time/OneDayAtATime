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
const homeButton = document.querySelector(".home_button")
const textInput = document.querySelector(".note")



let anxiousResponse = ""
let depressedResponse = ""
let lonelyResponse = ""
let sadResponse = ""
let overwhelmedResponse = ""
let angryResponse = ""
let rejectedResponse = ""
let exhaustedResponse = ""
let note= ""

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const submit = () => {
    submitButton.classList.add("hide")
    homeButton.classList.remove("hide")
    if (midRowTwo.firstChild) {
        midRowTwo.innerHTML = ""
    }
    midRowTwo.appendChild(calendarAnchor)
    calendarAnchor.appendChild(calendarMonth)
    calendarAnchor.appendChild(calendarGrid)

    console.log("submitPress")

    midRowTwo.innerHTML = `<div class="card__container"></div>`
    const cardAnchor = document.querySelector(".card__container")
    

//     let slider = document.getElementById(".slider_input");
//     let output = document.getElementById(".range__valie");
//     output.innerHTML = slider.value;
//     slider.oninput = function() {
//     output.innerHTML = this.value;
// }

    inputs.forEach(input => {

        const lowResponse = input.value > 0 && input.value <= 33
        const medResponse = input.value >= 34 && input.value <= 66
        const highResponse = input.value >= 67 && input.value <= 100
        const card = document.createElement("div")
        card.classList.add("card")


        console.log(input.value + input.name)
            
        let anxiousRange = document.querySelector(".anxious__value");
        

        switch(input.name){
            case "anxious": 
            anxiousRange = input.value
            break
            // case "depressed":
            // depressedRan
        }

        if (lowResponse) {
            let lowResponse = ""
            switch (input.name) {
                case "anxious":
                    lowResponse = "Call or email a friend you haven't talked to in awhile"
                    anxiousResponse = "low"
                    break
                case "depressed":
                    lowResponse = "Find something on YouTube that makes you laugh out loud"
                    depressedResponse = "low"
                    break
                case "lonely":
                    lowResponse = "Try volunteering at a pet shelter"
                    lonelyResponse = "low"
                    break
                case "angry":
                    lowResponse = "take a breather, count to 10 in and out"
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
                    lowResponse = "Make sure you have enough water, and have eaten a proper meal"
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
                    medResponse = '<a href="https://www.psychologytoday.com/us/blog/in-practice/201503/50-strategies-beat-anxiety">How to fight anxiety</a>'
                    anxiousResponse = "med"
                    break
                case "depressed":
                    medResponse = `<a href= "https://www.healthline.com/health/depression/how-to-fight-depression" >How to fight depression</a>`
                    depressedResponse = "med"
                    break
                case "lonely":
                    medResponse = `<a href= "https://www.verywellmind.com/how-to-cope-with-loneliness-3144939" >How to fight loneliness</a>`
                    lonelyResponse = "med"
                    break
                case "angry":
                    medResponse = `<a href = "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/anger-management/art-20045434" >How to deal with anger</a>`
                    angryResponse = "med"
                    break
                case "overwhelmed":
                    medResponse = '<a href="https://www.psychologytoday.com/us/blog/in-practice/201503/50-strategies-beat-anxiety">How to manage feeling overwhelmed</a>'
                    overwhelmedResponse = "med"
                    break
                case "sad":
                    medResponse = `<a href= "https://www.healthline.com/health/depression/how-to-fight-depression" >How to fight being sad</a>`
                    sadResponse = "med"
                    break
                case "rejected":
                    medResponse = `<a href= "https://www.psychalive.org/how-to-deal-with-rejection/" >How to fight being feeling rejected</a>`
                    rejectedResponse = "med"
                    break
                case "exhausted":
                    medResponse = `<a href ="https://www.imalive.org/">how to overcome exhuastion</a>`
                    exhaustedResponse = "med"
                    break
            }
            card.innerHTML = medResponse
            cardAnchor.appendChild(card)
        }
        if (highResponse) {
            let highResponse = ""
            switch (input.name) {
                case "anxious":
                    highResponse = `Your anxiety score is high, <a href="https://www.crisisprevention.com/">please click this link for immediate help</a>`
                    anxiousResponse = "high"
                    break
                case "depressed":
                    highResponse = `Your depression score is high,<a href="https://suicidepreventionlifeline.org/"> please click here this link for immediate help</a>`
                    depressedResponse = "high"
                    break
                case "lonely":
                    highResponse = `Your loneliness score is high,<a href="https://www.crisisprevention.com/"> please click this link for immediate help</a>`
                    lonelyResponse = "high"
                    break
                case "angry":
                    highResponse = `Your anger score is high,<a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline">  please click here</a>`
                    angryResponse = "high"
                    break
                case "overwhelmed":
                    highResponse = `Your overwhelmed score is high,<a href="https://suicidepreventionlifeline.org/"> please click here this link for immediate help</a>`
                    overwhelmedResponse = "high"
                    break
                case "sad":
                    highResponse = `Your sadness score is high,<a href="https://suicidepreventionlifeline.org/"> please click here this link for immediate help</a>`
                    sadResponse = "high"
                    break
                case "rejected":
                    highResponse = `Your rejected score is high,<a href="https://suicidepreventionlifeline.org/"> please click here this link for immediate help</a>`
                    rejectedResponse = "high"
                    break
                case "exhausted":
                    highResponse = `Your exhaustion score is high,<a href="https://www.crisisprevention.com/"> please click this link for immediate help</a>`
                    exhaustedResponse = "high"
                    break
            }

            card.innerHTML = highResponse
            cardAnchor.appendChild(card)
        }
        note.innerHTML = textInput.value
    })

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
         "note": note
    }
    console.log(newSubmitJson)
    fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSubmitJson)
    })

}






submitButton.addEventListener("click", submit)