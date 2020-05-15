import { RomData } from "../romData";

const state = RomData;

// read only. 初期値から変更できない
export function romReducer(_state: typeof RomData, action: any) {
  return state;
}
