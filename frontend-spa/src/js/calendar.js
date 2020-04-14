const calendarButton = document.querySelector(".calendar_button")
const calendarGrid = document.createElement("div")
const calendarAnchor = document.createElement("div")
const calendarMonth = document.createElement("h2")
const dayAnchor = document.createElement("div")
const singleDay = document.createElement("div")
const singleDayTitle = document.createElement("h3")
const singleDayBody = document.createElement("p")

singleDay.classList.add("single_day")
dayAnchor.classList.add("day_anchor")
calendarMonth.classList.add("calendar_month")
calendarMonth.innerHTML = "April"
calendarAnchor.classList.add("calendar_anchor")
calendarGrid.classList.add("calendar_grid")

const calendarSubmit = () => {
    submitButton.classList.add("hide")
    homeButton.classList.remove("hide")
    singleDayTitle.className = ""
    if (midRowTwo.firstChild) {
        midRowTwo.innerHTML = ""
    }
    midRowTwo.appendChild(calendarAnchor)
    calendarAnchor.appendChild(calendarMonth)
    calendarAnchor.appendChild(calendarGrid)

    getSubmissions()

}

singleDays.forEach((singleDay) => {
    singleDay.addEventListener("click", (singleDay) => {
        midRowTwo.innerHTML = `<div class="day_anchor">
        <div class="single_day calendar_day-high ">
            <h3 class="">date</h3>
            <ul class="">
                <li class="">anxious</li>
                <li class="">depressed</li>
            </ul>
        </div>
    </div>`
    })

})


const renderCalendarView = (submissions) => {
    calendarGrid.innerHTML = ""
    submissions.forEach((submission) => {
        const emotionArray = [submission.anxious, submission.depressed, submission.sad, submission.lonely, submission.exhausted, submission.angry, submission.overwhelmed, submission.rejected]
        const calendarSquare = document.createElement("div")
        calendarSquare.classList.add("calendar_day")
        calendarSquare.addEventListener("click", () => {
            renderSingleDayView(submission)
        })
        const calendarSquareMonth = document.createElement("p")
        calendarSquareMonth.classList.add("month_info")
        calendarSquareMonth.innerText = "April"

        const calendarSquareDate = document.createElement("p")
        calendarSquareDate.classList.add("date_info")
        calendarSquareDate.innerText = submission.day

        calendarSquare.appendChild(calendarSquareMonth)
        calendarSquare.appendChild(calendarSquareDate)
        emotionArray.forEach((emotionValue) => {
            if (emotionValue == "low") {
                calendarSquare.classList.add("calendar_day-low")
            }

            if (emotionValue == "med") {
                calendarSquare.classList.add("calendar_day-med")
            }
            if (emotionValue == "high") {
                calendarSquare.classList.add("calendar_day-high")
            }

        })
        calendarGrid.appendChild(calendarSquare)


    })

};

const renderSingleDayView = (submission) => {
    if (midRowTwo.firstChild) {
        midRowTwo.innerHTML = ""
    }

    const emotionArray = [submission.anxious, submission.depressed, submission.sad, submission.lonely, submission.exhausted, submission.angry, submission.overwhelmed, submission.rejected]
    emotionArray.forEach((emotionValue) => {
        if (emotionValue == "low") {
            singleDayTitle.classList.add("calendar_day-low")
        }

        if (emotionValue == "med") {
            singleDayTitle.classList.add("calendar_day-med")
        }
        if (emotionValue == "high") {
            singleDayTitle.classList.add("calendar_day-high")
        }

    })
    singleDayTitle.innerText = submission.month + " - " + submission.day
    singleDayBody.innerHTML = `<ul class="single_day_list"> 
    <li>Anxious level: ${submission.anxious}</il> 
    <li>Drepressed level: ${submission.depressed}</li>
    <li>Sad level: ${submission.sad}</li>
    <li>Lonely level: ${submission.lonely}</li>
    <li>Exhausted level: ${submission.exhausted}</li>
    <li>Angry level: ${submission.angry}</li>
    <li>Overwhelmed level: ${submission.overwhelmed}</li>
    <li>Rejected level: ${submission.rejected}</li>
    
    </ul> 
    <div><p>Note: ${submission.note}</p></div>`

    singleDayTitle.classList.add("single_day_title")
    singleDayBody.classList.add("single_day_body")
    midRowTwo.appendChild(dayAnchor)
    dayAnchor.appendChild(singleDay)
    singleDay.appendChild(singleDayTitle)
    singleDay.appendChild(singleDayBody)

}

calendarButton.addEventListener("click", calendarSubmit)