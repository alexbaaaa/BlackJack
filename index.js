import {Game} from './modules/game.js';

// let deck = new Deck(); // Esto loego sera un get de la clase Deck
// let discard = []; //Esto despues ser un get de la clase Deck
// let hand = []; //Esto despues ser un get de la clase Deck

document.getElementById('button').addEventListener('click', () =>{ 
    let game  = new Game();
    game.initGame();
    document.getElementById('button').style.display = 'none';
    let button2 = document.getElementById('button2');
    button2.style.display = 'block';
    button2.addEventListener("click", () =>{
        game.initGame();
    });
    
});





