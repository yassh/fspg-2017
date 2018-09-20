// @flow
import sov from "./sov"

function ascSort(arr) {
  return [...arr].sort((a, b) => b - a)
}

export function getBaseValueOfJump(abbrJump: string, x: boolean): ?number {
  return abbrJump.split("+").reduce((acc, abbr) => {
    const bv = sov[abbr] ? Math.floor(sov[abbr].base * (x ? 1.1 : 1)) : null

    return acc + bv
  }, 0)
}

export function getBaseValue(abbr: string, x: boolean): ?number {
  return getBaseValueOfJump(abbr, x)
}

export function getGoeValue(abbr: string, judgeValue: number): ?number {
  if (!sov[abbr]) return null

  switch (judgeValue) {
    case 3:
      return sov[abbr]["+3"]
    case 2:
      return sov[abbr]["+2"]
    case 1:
      return sov[abbr]["+1"]
    case 0:
      return 0
    case -1:
      return sov[abbr]["-1"]
    case -2:
      return sov[abbr]["-2"]
    case -3:
      return sov[abbr]["-3"]
    default:
      return null
  }
}

export function getGoe(abbr: string, judgeValues: Array<number>): ?number {
  if (judgeValues.length < 3) return null

  const sortedJudgeValues = ascSort(judgeValues)
  const remainingJudgeValues = sortedJudgeValues.slice(1, -1)
  const sum = remainingJudgeValues.reduce((acc, judgeValue) => acc + getGoeValue(abbr, judgeValue), 0)
  const goe = Math.round(sum / remainingJudgeValues.length)

  return goe
}

export default function(input: Object): Object {
  return {
    ...input,
    elements: input.elements.map(element => {
      const bv = getBaseValue(element.abbr, element.x)
      const goe = getGoe(element.abbr, element.j)
      const sop = bv + goe

      return {
        ...element,
        bv,
        goe,
        sop,
      }
    }),
  }
}
