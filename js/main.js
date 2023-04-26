let gridElement = document.querySelector(".container");
const btnPlay = document.querySelector(".play")

btnPlay.addEventListener("click", function(){
    for (let i = 1; i <= 100; i++){
        gridElement.innerHTML += `<div class="square">${i}</div>`
    }
});










// FUNZIONI
