import {Deck} from './deck.js';
import {Player} from './player.js';

class Game {
    constructor() {
        this.deckGame = new Deck();
        this.player = new Player();
        this.handValue = 0;
        
    }

    initGame(){
        while(this.player._hand.length < 2){
            let random =  Math.floor(Math.random()*this.deckGame._deck.length);
            let valorR = this.deckGame._deck.splice(random,1)[0]; 
            this.player._hand.push(valorR);
            
        }
        return this.player._hand.toString().replaceAll(',',' ');
    }
    addCard(){
        let random =  Math.floor(Math.random()*this.deckGame._deck.length);
        let valorR = this.deckGame._deck.splice(random,1)[0]; 
        this.player._hand.push(valorR);
        return this.player._hand.toString().replaceAll(',',' ');
    }
}

export {Game}