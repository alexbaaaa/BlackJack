import {Player} from './player.js';

class Game {
    constructor(deckGame) {
        this.deckGame = deckGame;
        this.player = new Player();
        this.handValue = 0;
        
    }

    initGame(){
        while(this.player._hand.length < 2){
            let random =  Math.floor(Math.random()*this.deckGame.length);
            let valorR = this.deckGame.splice(random,1)[0]; 
            this.player._hand.push(valorR);
            
        }
        console.log(this.deckGame);
        console.log(this.player._hand);
        return this.player._hand.toString().replaceAll(',',' ');
    }
    addCard(){
        let random =  Math.floor(Math.random()*this.deckGame.length);
        let valorR = this.deckGame.splice(random,1)[0]; 
        this.player._hand.push(valorR);
        
        console.log(this.player._hand);
        return this.player._hand.toString().replaceAll(',',' ');
    }
}

export {Game}