// @flow
import sov from "./sov"
import { isJump } from "./is"

export function getBaseValue(abbr: string): ?number {
  return sov[abbr] ? sov[abbr].base : null
}

export function getBaseValueOfJump(abbrJump: string, x?: boolean = false): number {
  return abbrJump.split("+").reduce((acc, abbr) => {
    if (abbr === "REP") return Math.round(acc * 0.7)

    const bv = Math.round((getBaseValue(abbr) || 0) * (x ? 1.1 : 1))
    return acc + bv
  }, 0)
}

export default function getBaseValueOfElement(abbr: string, x?: boolean = false): ?number {
  return isJump(abbr) ? getBaseValueOfJump(abbr, x) : getBaseValue(abbr)
}
