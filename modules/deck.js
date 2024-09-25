class Deck {
    constructor(){
        this._deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
        this._hand = [];
        this.discard = [];
    }
    get deck(){
        return this._deck;
    }
    
    get hand(){
        return this._hand;
    }
}
export {Deck}