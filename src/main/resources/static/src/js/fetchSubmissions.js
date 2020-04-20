const getSubmissions = () => {
    fetch('https://one-day-at-a-time.herokuapp.com/response')
        .then(response => response.json())
        .then(submissions => renderCalendarView(submissions))


}