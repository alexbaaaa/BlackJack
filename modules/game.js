import {Player} from './player.js';

class Game {
    constructor(deckGame) {
        this.deckGame = deckGame;
        this.player = new Player();
        this.cupier = new Player();
        this.handValue = 0;
        
    }
    ramdomCard() {
        let random =  Math.floor(Math.random()*this.deckGame.length);
        return this.deckGame.splice(random,1)[0]; 
    }
    initGame(){
        while(this.player._hand.length < 2){
            
            this.player._hand.push(this.ramdomCard());
            this.cupier._hand.push(this.ramdomCard());
        }
        console.log(this.deckGame);
        return [this.player._hand.toString(), this.cupier._hand.toString()];
    }
    addCard(){
        this.player._hand.push(this.ramdomCard());
        this.cupier._hand.push(this.ramdomCard());
        
        console.log(this.player._hand);
        console.log(this.cupier._hand);
        console.log(this.deckGame);
        
        return [this.player._hand.toString(), this.cupier._hand.toString()];
    }
}

export {Game}