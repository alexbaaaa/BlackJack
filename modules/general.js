import { TYPESDECKS } from "./config/typesDeck.js";
import { Deck } from "./deck.js";

export const GENERAL = {
    'nameDeck' : () => {
        let keyDeck = Object.keys(TYPESDECKS);
        return  keyDeck.map(key => Reflect.get(TYPESDECKS[key],'name'));
    },
    'suitsDeck': TYPESDECKS,
    'Deck' : Deck,
    'buildDeck' : (nameDeck) => {
        //filter con el array de nameDeck
        return GENERAL.nameDeck().find((name) => name === nameDeck )
    }
}
