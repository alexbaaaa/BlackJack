import {Game} from './modules/game.js';
import { GENERAL } from './modules/general.js';
import { Ui } from './modules/ui.js';
//PROVISIONAL


let game  = new Game(GENERAL.buildDeck("espDeck"));
let ui = new Ui();






// game.initGame();
// game.addCard();
// game.addCard();

// Todo lo relacionado con la interfaz lo llevare a la clase Ui
var addCard = document.getElementById('addCard');
var leaveit = document.getElementById('leaveit');
var endGame = document.getElementById('endGame');
var textoJ = document.getElementById('textoJ');
var textoC = document.getElementById('textoC');
var firstHand;

document.getElementById('button').addEventListener('click', () =>{ 
    firstHand = game.initGame();
    document.getElementById('button').style.display = 'none';
    addCard.style.display = 'block';  
    leaveit.style.display = 'block';  
    endGame.style.display = 'block';  
    textoJ.innerHTML= "Jugador: " +firstHand[0]; 
    textoC.innerHTML= "Cupier: " +firstHand[1]; 
});

addCard.addEventListener("click", () =>{
    textoJ.innerHTML = "Jugador: " + game.addCard()[0];
    textoC.innerHTML = "Cupier: " + game.addCard()[1];
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






