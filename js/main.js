const gridElement = document.querySelector(".container");
const btnPlay = document.querySelector(".play")
let option = document.querySelector("#option");

btnPlay.addEventListener("click", function(){
    gridElement.innerHTML="";
    let optioneSelected = option.value;
    play(optioneSelected);
}); 




// FUNZIONI
function play (box){
    
    for (let i = 1 ; i <= box; i++){
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.classList.add(`s-${box}`);
        newSquare.innerHTML=`${i}`;
        gridElement.appendChild(newSquare);

        newSquare.addEventListener("click", function() {
            console.log("La casella selezionata è la numero:", this.innerHTML);
            this.classList.toggle("clicked");
        });
    }  
        
}
