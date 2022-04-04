//Genera una griglia di gioco in base alla difficoltà

let playElement = document.getElementById("play");

playElement = document.addEventListener("click", difficultLevel)




function difficultLevel(){
    let valore = document.getElementById("level").value;
    
    if (valore == "easy") {
        console.log("è facile");

    } else if (valore == "medium") {
        console.log("è medio");
    } else if (valore == "hard") {
        console.log("è hard");
    }
}



