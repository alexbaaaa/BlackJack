import {Deck} from './modules/deck.js';
import {Play} from './modules/play.js';

let deck = new Deck(); // Esto loego sera un get de la clase Deck
let discard = []; //Esto despues ser un get de la clase Deck
let hand = []; //Esto despues ser un get de la clase Deck

document.getElementById('button').addEventListener('click', () =>{ 
    let play = new Play(deck.getDeck(),discard,hand);
});





