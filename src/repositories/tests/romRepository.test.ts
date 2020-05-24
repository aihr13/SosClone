import { RomRepository } from "../romRepository";

test("#_importFn: returns RomData json object data", async () => {
  const romRepository = new RomRepository({
    path: import("./testRomData.json")
  });
  await expect(await romRepository["_importFn"]).toStrictEqual({
    "01": { name: "ほげ" }
  });
  //   await romRepository.load();
  //   expect(romRepository["_loaded"]).toBe(true);
});

test("load(): #_loaded が true になる", async () => {
  const romRepository = new RomRepository({
    path: import("./testRomData.json")
  });
  await romRepository.load();
  await expect(romRepository["_loaded"]).toBe(true);
});

test("load(): 1 度しか呼ぶことができない", async () => {
  const romRepository = new RomRepository({
    path: import("./testRomData.json")
  });
  await romRepository.load();
  await expect(romRepository.load()).rejects.toThrow(
    "each Repository instances can load rom data only one time."
  );
});
