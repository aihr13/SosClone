import { store } from "../store/store";
import { RamLists } from "../store/typing/Ram";

export function readById<K extends keyof RamLists>(
  key: [K, number]
): RamLists[K] {
  return store.getState().gameState[key[0]][key[1]] as RamLists[K];
}
