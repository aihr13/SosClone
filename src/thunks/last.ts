import { store } from "../store/store";
import { RamCollectionNames } from "../store/typing/Rom/unions/RamCollectionNames";
import { RamLists } from "../store/typing/Ram";

export function last<R extends RamCollectionNames>(
  collectionName: R
): RamLists[R] {
  const state = store.getState().gameState;
  const lastId = Object.keys(state[collectionName])
    .map(_ => parseInt(_))
    .reduce((a, b) => (a > b ? a : b), 0);

  return state[collectionName][lastId] as RamLists[R];
}
