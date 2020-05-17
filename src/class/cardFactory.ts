import { Factory } from "./factory";

type NormalActionCard = {
  romId: string;
  name: string;
  type: "normalAction";
};

type AnyCard = NormalActionCard;

export class CardFactory extends Factory<AnyCard> {
  constructor() {
    super(import("../rom/cards.json"));
  }
}

type AnyCard2 = CardFactory;
