class Deck {
    constructor(){
        this.cardSuits = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
        this.values  = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this._deck = [];
        this.cardSuits.forEach((element) => {
            this.values.forEach((value) => { this._deck.push(value+ ' '+element)})
        });
    }
    get deck(){
        return this._deck;
    }
    
    
}
export {Deck}