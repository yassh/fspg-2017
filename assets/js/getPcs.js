// @flow
import _ from "lodash"
import { ascSort } from "./utils"

export default function getPcs(judgeValues: Array<number>): ?number {
  const filteredJudgeValues = judgeValues.filter(judgeValue => judgeValue != null)

  if (filteredJudgeValues.length < 3) return null

  const remainingJudgeValues = ascSort(filteredJudgeValues).slice(1, -1)
  const sum = _.sum(remainingJudgeValues)

  return Math.round(sum / remainingJudgeValues.length)
}
