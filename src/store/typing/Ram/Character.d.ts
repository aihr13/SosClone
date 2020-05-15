import { RomCharacter } from "../Rom/RomCharacter";
import { RomCharacterIdList } from "../Rom/unions/RomCharacterIdList";
import { RamId } from "../Rom/other/RamId";
import { ResourceTypeList } from "../Rom/unions/ResourceTypeList";

export type Character = RomCharacter<RomCharacterIdList> &
  Resources & { id: RamId<"characters"> };

type Resources = { リソース: { [K in ResourceTypeList]: number } };
