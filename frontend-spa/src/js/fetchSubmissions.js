const getSubmissions =() =>{
    fetch('http://localhost:8080/response')
    .then(response => response.json())
    .then(submissions => renderCalendarView(submissions))
  
    
}
const renderCalendarView = (submissions) =>{
    const calendarSquare = document.createElement("div")
        submissions.forEach((submission) => {
        console.log(submission.year)
        calendarSquare.classList.add("calendar_day")
        calendarSquare.innerHTML = submission.day + "/" + submission.month + "/" + submission.year;
        calendarGrid.appendChild(calendarSquare)

    })
        
    };

