class Deck {
    constructor(){
        this.deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
        this.hand = [];
        this.discard = [];
    }
    getDeck(){
        return this.deck;
    }

}
export {Deck}