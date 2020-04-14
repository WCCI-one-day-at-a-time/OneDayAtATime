let urgent = document.querySelector(".urgent")
const infoList = document.querySelector(".info-list")

const emergency = () => {
  
        if (midRowTwo.firstChild) {
            midRowTwo.innerHTML = ""
        }
        const emergencyCard = document.createElement("div")
        const emergencyAnchor = document.createElement("div")
        emergencyAnchor.classList.add("emergency_anchor")
        emergencyAnchor.classList.add("emergency_card")
        midRowTwo.appendChild(emergencyAnchor)
        emergencyAnchor.appendChild(emergencyCard)
        emergencyCard.innerHTML = '<p> For immediate help dial <p class="help_now">911</p> </p><p> and follow the links below: </p><p><a href="https://www.samhsa.gov/esmi-treatment-locator">Locations to get help across the country</a></p>'
    
 
    
    submitButton.classList.add("hide")
    homeButton.classList.remove("hide")
   
    
}

urgent.addEventListener("click", emergency)