/**
 * アビリティ
 */

export type RomAbillity<K extends RomAbillityId> = {
  romId: K;
  名前: string;
  説明: string;
};

export type RomAbillityId = "test";

export type RomAbillities = {
  [K in RomAbillity<RomAbillityId>["romId"]]: RomAbillity<K>;
};
