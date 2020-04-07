const calendarButton = document.querySelector(".calendar_button")


const calendarSubmit = () =>{
    

    console.log("calendarpressed")
    
        midRowTwo.innerHTML = `<div class="calendar_anchor"></div>`
        const calendarAnchor = document.querySelector(".calendar_anchor")
        calendarAnchor.innerHTML = `<h2 class="calendar_month">
        calendar month
    </h2>
   <div class="calendar_grid">
       <p class="calendar_header">Sunday</p>
       <p class="calendar_header">Monday</p>
       <p class="calendar_header">Tuesday</p>
       <p class="calendar_header">Wednesday</p>
       <p class="calendar_header">Thursday</p>
       <p class="calendar_header">Friday</p>
       <p class="calendar_header">Saturday</p>
      <div class="calendar_day calendar_day-low"></div>
       <div class="calendar_day calendar_day-med"></div>
       <div class="calendar_day calendar_day-high"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
       <div class="calendar_day"></div>
   </div>`

}
calendarButton.addEventListener("click", calendarSubmit)
