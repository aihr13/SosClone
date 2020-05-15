import { mes } from "./mes";
import { click } from "./wait";

export async function mesW(message: string) {
  mes(message);
  await click();
}
