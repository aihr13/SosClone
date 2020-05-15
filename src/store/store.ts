import { createStore, combineReducers } from "redux";
import { romReducer } from "./rom.reducer";
import { gameStateReducer } from "./gameState.reducer";
import { systemReducer, SystemState } from "./system.reducer";
import { RomData } from "../romData";
import { Ram } from "./typing/Ram";
import { Rom } from "./typing/Rom";

// @todo remove this
declare var window: any;

const rootReducer = combineReducers({
  rom: romReducer,
  gameState: gameStateReducer,
  system: systemReducer
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const dispatch = store.dispatch;

export type RootState = {
  rom: Rom;
  gameState: Ram;
  system: SystemState;
};
