// @flow
import _ from "lodash"
import sov from "./sov"
import { isJump } from "./is"
import { getBaseValueOfJump } from "./getBaseValueOfElement"
import { ascSort } from "./utils"

export function getGoe(abbr: string, judgeValues: Array<number>): ?number {
  const filteredJudgeValues = judgeValues.filter(judgeValue => judgeValue != null)

  if (filteredJudgeValues.length < 3) return null

  const remainingJudgeValues = ascSort(filteredJudgeValues).slice(1, -1)
  const sum = _.sum(
    remainingJudgeValues.map(judgeValue => {
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
    }),
  )

  return Math.round(sum / remainingJudgeValues.length)
}

export function getGoeOfJump(abbrJump: string, judgeValues: Array<number>): ?number {
  const abbrMostDifficultJump = abbrJump
    .split("+")
    .reduce((acc, abbr) => (getBaseValueOfJump(abbr) > getBaseValueOfJump(acc) ? abbr : acc))

  return getGoe(abbrMostDifficultJump, judgeValues)
}

export default function getGoeOfElement(abbr: string, judgeValues: Array<number>): ?number {
  return isJump(abbr) ? getGoeOfJump(abbr, judgeValues) : getGoe(abbr, judgeValues)
}
