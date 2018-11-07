// @flow
import _ from "lodash"
import { isJump } from "./is"
import sov from "./sov"

function ascSort(arr) {
  return [...arr].sort((a, b) => b - a)
}

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

export function getBaseValueOfElement(abbr: string, x?: boolean = false): ?number {
  return isJump(abbr) ? getBaseValueOfJump(abbr, x) : getBaseValue(abbr)
}

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

export function getGoeOfElement(abbr: string, judgeValues: Array<number>): ?number {
  return isJump(abbr) ? getGoeOfJump(abbr, judgeValues) : getGoe(abbr, judgeValues)
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
    const bv = getBaseValueOfElement(element.abbr, element.x)
    const goe = getGoeOfElement(element.abbr, element.j)
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
