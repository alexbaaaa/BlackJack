class Play {
    constructor(deck,discard,hand) {
        
        this.ramdon =  Math.floor(Math.random()*deck.length);
        this.valorR = deck.splice(this.ramdon.floor,1);
        hand.push(this.valorR);
        discard.push(this.valorR);

        this.ramdon =  Math.floor(Math.random()*deck.length);
        this.valorR = deck.splice(this.ramdon.floor,1);
        hand.push(this.valorR);
        discard.push(this.valorR);
        


        console.log('numero ramdom: '+this.ramdon);
        console.log('baraja'+deck);
        console.log('descartes'+discard);
        console.log(hand);
    }

}

export {Play}