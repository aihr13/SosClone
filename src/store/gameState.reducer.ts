import produce, { setAutoFreeze } from "immer";
import { RamS, Ram } from "./typing/Ram";
import { RamCollectionNames } from "./typing/Rom/unions/RamCollectionNames";

export type gameStateActionType =
  | { type: "ADD"; payload: RamS<RamCollectionNames> }
  | { type: "UPDATE"; payload: RamS<RamCollectionNames> };

export function gameStateReducer(
  state: Ram = {
    characters: {},
    world: {}
  },
  action: gameStateActionType
): Ram {
  switch (action.type) {
    case "ADD": {
      const [from, data] = action.payload;
      return produce(state, draft => {
        const newId =
          Object.keys(draft[from])
            .map(_ => parseInt(_))
            .reduce((a, b) => (a > b ? a : b), 0) + 1;
        draft[from][newId] = { ...data, ...{ id: [from as any, newId] } };
        return draft;
      });
    }
    case "UPDATE": {
      const [from, data] = action.payload;
      return produce(state, draft => {
        draft[from][data.id[1]] = data;
        return draft;
      });
    }
    default:
      return state;
  }
}
