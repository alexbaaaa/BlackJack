import {Deck} from './deck.js';

class Game {
    constructor() {
        this.deckGame = new Deck();
        
    }

    initGame(){
        this.ramdon =  Math.floor(Math.random()*this.deckGame._deck.length);
        this.valorR = this.deckGame.deck.splice(this.ramdon.floor,1);
        this.deckGame._hand.push(this.valorR);
        //discard.push(this.valorR);

        this.ramdon =  Math.floor(Math.random()*this.deckGame._deck.length);
        this.valorR = this.deckGame.deck.splice(this.ramdon.floor,1);
        this.deckGame._hand.push(this.valorR);
        //discard.push(this.valorR);
        


        console.log('numero ramdom: '+this.ramdon);
        console.log('baraja'+this.deckGame.deck);
        //console.log('descartes'+discard);
        console.log(this.deckGame._hand);
    }
}

export {Game}