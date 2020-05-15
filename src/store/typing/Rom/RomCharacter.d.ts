import { RomCharacterIdList } from "./unions/RomCharacterIdList";
import { RomCardIdList } from "./unions/RomCardIdList";

export type RomCharacter<K extends RomCharacterIdList> = {
  romId: K;
  名前: string;
  呼び名: string;
  deck: { [K in RomCardIdList]?: number };
};

export type RomCharacters = {
  [K in RomCharacter<RomCharacterIdList>["romId"]]: RomCharacter<K>;
};
