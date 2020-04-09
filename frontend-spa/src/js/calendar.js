const calendarButton = document.querySelector(".calendar_button")


const calendarSubmit = () =>{
    
    getSubmissions()
    console.log("calendarpressed")
    
        midRowTwo.innerHTML = `<div class="calendar_anchor"></div>`
        const calendarAnchor = document.querySelector(".calendar_anchor")
        calendarAnchor.innerHTML = `<h2 class="calendar_month">
        calendar month
    </h2>
   <div class="calendar_grid">
      
   </div>`


}
singleDays.forEach((singleDay) => {    
    singleDay.addEventListener("click", (singleDay)=>{
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

} )
const renderCalendarView = (submissions) =>{
    
        submissions.forEach((submission) => {
            const emotionArray = [submission.anxious, submission.depressed, submission.sad, submission.lonely, submission.exhausted, submission.angry, submission.overwhelmed, submission.rejected]
            console.log(emotionArray)               
            const calendarSquare = document.createElement("div")
            console.log(submission.year)
            calendarSquare.classList.add("calendar_day")
            calendarSquare.innerHTML = submission.day + "/" + submission.month + "/" + submission.year;
            emotionArray.forEach((emotionValue) => {
                if (emotionValue=="low"){
                    calendarSquare.classList.add("calendar_day-low")
                }
              
                if (emotionValue=="med"){
                    calendarSquare.classList.add("calendar_day-med")
                }  
                if (emotionValue == "high"){
                    calendarSquare.classList.add("calendar_day-high")
                }
                
            })
            calendarGrid.appendChild(calendarSquare)
            

    })
        
    };

calendarButton.addEventListener("click", calendarSubmit)



