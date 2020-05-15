import { dispatch } from "../store/store";
import { readByRomId } from "../select/readByRomId";
import { RomCharacterIdList } from "../store/typing/Rom/unions/RomCharacterIdList";
import { last } from "./last";
import { RomCharacter } from "../store/typing/Rom/RomCharacter";
import { Character } from "../store/typing/Ram/Character";

export function addCharacterFromRom(romId: RomCharacterIdList) {
  const romCharacter = readByRomId(["characters", romId]);
  if (romCharacter == null) {
    throw Error(`Character ${romId} は RomData に登録されていません`);
  }
  dispatch({
    type: "ADD",
    payload: ["characters", setDefaultResource(romCharacter)]
  });
  return last("characters");
}

function setDefaultResource(romChara: RomCharacter<RomCharacterIdList>) {
  const character: Character = {
    ...romChara,
    id: ["characters", 0],
    リソース: {
      疲労: 2
    }
  };
  return character;
}
