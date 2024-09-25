import {Game} from './modules/game.js';
var game  = new Game();
// Todo lo relacionado con la interfaz lo llevare a la clase Ui
var addCard = document.getElementById('addCard');
var leaveit = document.getElementById('leaveit');
var endGame = document.getElementById('endGame');
var texto = document.getElementById('texto');
var firstHand;

document.getElementById('button').addEventListener('click', () =>{ 
    firstHand = game.initGame();
    document.getElementById('button').style.display = 'none';
    addCard.style.display = 'block';  
    leaveit.style.display = 'block';  
    endGame.style.display = 'block';  
    texto.innerHTML= firstHand; 
});

addCard.addEventListener("click", () =>{
    texto.innerHTML = game.addCard();
});






// Solucion cutre cutre cutre cutre cutre cutre

// var contador = 0;
// var pepe = [];
// var texto = document.getElementById('texto');
// var valor = document.getElementById('valor');
// function random() {
//     return Math.floor(Math.random()*11)+1;
// }

// for(let a = 0; a==0; a++) {
//     let random2 = random();
//     pepe.push(random2);
//     contador = contador + random2;

//     if( contador == 21){
//         texto.innerHTML = 'Has ganado';
//         valor.innerHTML = pepe.toString().replaceAll(',',' + ') +' = '+ contador;
//     }else if(contador > 21 ) {
//         texto.innerHTML = 'Has perdido';
//         valor.innerHTML = pepe.toString().replaceAll(',',' + ') +'= '+ contador;
//     }else {
//         a--;
//     }
    
// }






