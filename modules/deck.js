class Deck {
    constructor(type){
        this.cardSuits = type.suits;
        this.values  = type.values;
        this._deck = [];
        this.cardSuits.forEach((element) => {
            this.values.forEach((value) => { this._deck.push(value+ ' de '+element)})
        });
    }
    get deck(){
        return this._deck;
    }
    
    
}
export {Deck}