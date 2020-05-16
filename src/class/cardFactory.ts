import { Factory } from "./factory";

export class CardFactory extends Factory {
  constructor() {
    super(import("../rom/cards.json"));
  }
}
