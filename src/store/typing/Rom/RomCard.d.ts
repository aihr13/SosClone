import { ResourceTypeList } from "./unions/ResourceTypeList";
import { RomCardIdList } from "./unions/RomCardIdList";

/**
 * スキル.
 */
export type RomCard = {
  romId: RomCardIdList;
  名前: string;
  説明: string;
  難易度: number;
  疲労: number;
  効果量: { [K in ResourceTypeList]?: number };
  learning: {
    resources: { [K in ResourceTypeList]?: number };
    costs: { [K in ResourceTypeList]?: number };
  };
};

export type RomCards = {
  [K in RomCard["romId"]]: RomCard & { romId: K };
};
