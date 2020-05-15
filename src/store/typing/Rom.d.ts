import { RomCards } from "./Rom/RomCard";
import { RomCharacters } from "./Rom/RomCharacter";

export type Rom = {
  [K in keyof RomLists]: {
    [T in keyof RomLists[K]]: RomLists[K];
  };
};

export type RomLists = {
  characters: RomCharacters;
};

export type RomS<K extends keyof RomLists> = [K, RomLists[K]];
