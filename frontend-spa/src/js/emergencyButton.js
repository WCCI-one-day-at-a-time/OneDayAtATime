let urgent = document.querySelector(".urgent")

const emergency = () =>{
    console.log("emergencyPressed")
    midRowTwo.innerHTML = `<div class="card__container"></div>`

}

urgent.addEventListener("click", emergency)