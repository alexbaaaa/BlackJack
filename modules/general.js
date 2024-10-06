import { TYPESDECKS } from "./config/typesDeck.js";
import { Deck } from "./deck.js";

export const GENERAL = {
    'suitsDeck': TYPESDECKS,
    'Deck' : Deck,
    'buildDeck' : (deckName) => {
        return new Deck(TYPESDECKS.find(deck => Reflect.get(deck, 'name') === deckName))._deck;
    }
}
