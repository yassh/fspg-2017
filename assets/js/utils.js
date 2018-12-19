// @flow
export function ascSort(arr: Array<any>): Array<any> {
  return [...arr].sort((a, b) => b - a)
}
