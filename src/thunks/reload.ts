import { store } from "../store/store";

export function reload<R>(data: R): R {
  //@ts-ignore
  return store.getState().gameState[data.id[0]][data.id[1]];
}
