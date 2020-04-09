const getSubmissions =() =>{
    fetch('http://localhost:8080/response')
    .then(response => response.json())
    .then(submissions => renderCalendarView(submissions))
  
    
}


