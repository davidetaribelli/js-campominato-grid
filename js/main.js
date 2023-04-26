const gridElement = document.querySelector(".container");
const btnPlay = document.querySelector(".play")

btnPlay.addEventListener("click", function(){
    gridElement.innerHTML="";
    play(100);
}); 




// FUNZIONI
function play (box){
    
    for (let i = 0 ; i < box; i++){
        const newSquare = document.createElement("div");
        newSquare.classList.add("square")
        newSquare.innerHTML=`${i+1}`
        gridElement.appendChild(newSquare);

        newSquare.addEventListener("click", function() {
            console.log("La casella selezionata è la numero:", this.innerHTML);
            this.classList.toggle("clicked");
        });
    }  
     

   
}
