import { RamCollectionNames } from "../unions/RamCollectionNames";

export type RamId<T extends RamCollectionNames> = [T, number];
