import { TYPESDECKS } from "./config/typesDeck";
import { Deck } from "./deck";

export const GENERAL = {
    'nameDeck' : () => {
        let keyDeck = Object.keys(TYPESDECKS);
        return  keyDeck.map(key => Reflect.get(TYPESDECKS[key],'name'));
    },
    'suitsDeck': TYPESDECKS,
    'Deck' : Deck,
    'buildDeck' : (nameDeck) => {
        //filter con el array de nameDeck
    }
}
