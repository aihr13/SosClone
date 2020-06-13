import { produce } from "immer";

type Card = {};

class Deck {
  private _deck: Card[];
  private _hands: ReadonlyArray<Card>;
  private _trash: ReadonlyArray<Card>;

  constructor({ deck }: { deck: Card[] }) {
    this._deck = produce((deck, draft) => draft);
    this._hands = [];
    this._trash = [];
  }

  readonly draw: () => Card | undefined = () => {
    return this._deck.shift();
  };
}
