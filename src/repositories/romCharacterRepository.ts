import { Repository } from "./repository";

export type RamCharacter = {
  name: string;
  deck: { [key: string]: number };
};

export class RomCharacterRepository extends Repository<RamCharacter, {}> {
  constructor() {
    super({ path: import("../data/ram/characters.json") } as any);
  }
}
