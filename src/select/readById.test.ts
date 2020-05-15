import { addCharacterFromRom } from "../thunks/addCharacterFromRom";
import { readById } from "./readById";

test("basic", () => {
  expect(readById(["characters", 1])).toBe(undefined);

  addCharacterFromRom("ch105_椎名法子");

  expect(readById(["characters", 1]).呼び名).toBe("法子");
});
