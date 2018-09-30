// @flow
import _ from "lodash"
import { isJump } from "./is"
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
  return isJump(abbr) ? getBaseValueOfJump(abbr, x) : sov[abbr] ? sov[abbr].base : null
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
  const filteredJudgeValues = judgeValues.filter(judgeValue => judgeValue != null)

  if (filteredJudgeValues.length < 3) return null

  const remainingJudgeValues = ascSort(filteredJudgeValues).slice(1, -1)
  const sum = _.sum(remainingJudgeValues.map(judgeValue => getGoeValue(abbr, judgeValue)))

  return Math.round(sum / remainingJudgeValues.length)
}

export function getPcs(judgeValues: Array<number>): ?number {
  const filteredJudgeValues = judgeValues.filter(judgeValue => judgeValue != null)

  if (filteredJudgeValues.length < 3) return null

  const remainingJudgeValues = ascSort(filteredJudgeValues).slice(1, -1)
  const sum = _.sum(remainingJudgeValues)

  return Math.round(sum / remainingJudgeValues.length)
}

export default function(input: Object): Object {
  const elements = input.elements.map(element => {
    const bv = getBaseValue(element.abbr, element.x)
    const goe = getGoe(element.abbr, element.j)
    const sop = bv + goe

    return {
      ...element,
      bv,
      goe,
      sop,
    }
  })

  const tes = _.sum(elements.map(element => element.sop))

  const programComponents = {
    ...input.programComponents,
    skatingSkills: {
      ...input.programComponents.skatingSkills,
      sop: getPcs(input.programComponents.skatingSkills.j),
    },
    transitions: {
      ...input.programComponents.transitions,
      sop: getPcs(input.programComponents.transitions.j),
    },
    performance: {
      ...input.programComponents.performance,
      sop: getPcs(input.programComponents.performance.j),
    },
    composition: {
      ...input.programComponents.composition,
      sop: getPcs(input.programComponents.composition.j),
    },
    interpretation: {
      ...input.programComponents.interpretation,
      sop: getPcs(input.programComponents.interpretation.j),
    },
  }

  const tpcs = Math.round(
    programComponents.factor *
      (programComponents.skatingSkills.sop +
        programComponents.transitions.sop +
        programComponents.performance.sop +
        programComponents.composition.sop +
        programComponents.interpretation.sop),
  )

  const tss = tes + tpcs

  return {
    ...input,
    elements,
    programComponents,
    tes,
    tpcs,
    tss,
  }
}
