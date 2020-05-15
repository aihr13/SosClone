import { store } from "../store/store";
import { RomLists } from "../store/typing/Rom";

export function readByRomId<
  K extends keyof RomLists,
  K2 extends keyof RomLists[K]
>(key: [K, K2]): RomLists[K][K2] {
  return store.getState().rom[key[0]][key[1]];
}
