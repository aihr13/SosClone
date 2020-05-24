import { RomCharacterRepository } from "./romCharacterRepository";

test("test", async _ => {
  const romCharacterRepository = new RomCharacterRepository();
  await romCharacterRepository.load();
  expect(romCharacterRepository["_loaded"]).toBe(true);
});
