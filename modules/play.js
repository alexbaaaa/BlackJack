class Play {
    constructor(deck,discard) {
        this.ramdon =  Math.floor(Math.random()*7);

        this.valorR = deck.splice(this.ramdon.floor,1);
        this.hand = [] 

        this.hand.push(this.valorR);
        discard.push(this.valorR);

        console.log(this.ramdon);
        console.log(deck);
        console.log(discard);
        console.log(this.hand);
    }
    
}

export {Play}