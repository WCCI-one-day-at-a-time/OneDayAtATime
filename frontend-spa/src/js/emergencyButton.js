let urgent = document.querySelector(".urgent")
const infoList = document.querySelector(".info-list")

const emergency = () =>{
    console.log("emergencyPressed")
    midRowTwo.innerHTML = `<div class="info-list"></div>`
    midRowTwo.appendChild(infoList)
    
}

urgent.addEventListener("click", emergency)