import { Factory } from "../class/factory";

type NormalActionCard = {
  romId: string;
  name: string;
  type: "normalAction";
};

type AnyCard = NormalActionCard;

export class CardFactory extends Factory<AnyCard> {
  constructor() {
    super(import(/* webpackIgnore: true */ "./json/cards/cards.json"));
  }
}
