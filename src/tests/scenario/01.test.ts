import { store } from "../../store/store";
import { addCharacterFromRom } from "../../thunks/addCharacterFromRom";

test("basic", () => {
  expect(store.getState().gameState.characters[1]).toBe(undefined);

  addCharacterFromRom("ch105_椎名法子");

  expect(store.getState().gameState.characters[1].呼び名).toBe("法子");
});
