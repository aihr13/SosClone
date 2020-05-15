/**
 * Object.keys を型付きで行う。
 *
 * @param obj
 */
export function keys<A extends string>(obj: { [K in A]?: any }): A[] {
  return Object.keys(obj) as A[];
}
