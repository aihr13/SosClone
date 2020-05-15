import { Character } from "./Ram/Character";
import { RomCard } from "./Rom/RomCard";
import { RamId } from "./Rom/other/RamId";

export type Ram = {
  [K in keyof RamLists]: {
    [key: number]: RamLists[K];
  };
};

export type RamLists = {
  characters: Character;
  world: RomCard & { id: RamId<"world"> };
};

export type RamS<K extends keyof RamLists> = [K, RamLists[K]];
