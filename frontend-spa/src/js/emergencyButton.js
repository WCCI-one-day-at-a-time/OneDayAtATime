let urgent = document.querySelector(".urgent")

const emergency = () =>{
    console.log("emergencyPressed")
    midRowTwo.innerHTML = `<div class="info-list"></div>`

}

urgent.addEventListener("click", emergency)