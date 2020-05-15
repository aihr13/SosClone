/**
 * Object.entries を型付きで行う。
 *
 * @param obj
 */
export function entries<A extends string, O extends unknown>(
  obj: { [K in A]?: O }
): [A, O][] {
  return Object.entries(obj) as [A, O][];
}
