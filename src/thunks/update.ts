import { dispatch } from "../store/store";
import { RamCollectionNames } from "../store/typing/Rom/unions/RamCollectionNames";
import { RamS } from "../store/typing/Ram";

export function update<R extends RamS<RamCollectionNames>>({
  collectionName,
  data
}: {
  collectionName: R[0];
  data: R[1];
}) {
  dispatch({ type: "UPDATE", payload: [collectionName, data] });
}
