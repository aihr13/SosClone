import { RomCollectionNames } from "../unions/RomCollectionNames";

export type RomId<T extends RomCollectionNames> = [T, number];
