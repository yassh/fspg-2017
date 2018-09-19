// @flow
import sov from "./sov"

const PATTERN_INDIVIDUAL_JUMP = "((1|2|3|4)(T|S|Lo|F|Lz|A)e?(<|<<)?)"
const PATTERN_SOLO_JUMP = `(${PATTERN_INDIVIDUAL_JUMP})`
const PATTERN_JUMP_COMBINATION = `(${PATTERN_INDIVIDUAL_JUMP}[+]${PATTERN_INDIVIDUAL_JUMP}([+]${PATTERN_INDIVIDUAL_JUMP})?)`
const PATTERN_JUMP_SEQUENCE = `(${PATTERN_INDIVIDUAL_JUMP}[+]${PATTERN_INDIVIDUAL_JUMP}[+]SEQ)`
const PATTERN_REPEATED_JUMP = `(${PATTERN_INDIVIDUAL_JUMP}[+]REP)`
const PATTERN_JUMP_ELEMENT = `(${PATTERN_SOLO_JUMP}|${PATTERN_JUMP_COMBINATION}|${PATTERN_JUMP_SEQUENCE}|${PATTERN_REPEATED_JUMP})`
const REGEX_JUMP_ELEMENT = new RegExp(`^${PATTERN_JUMP_ELEMENT}$`)

export function isJumpElement(abbr: string) {
  return REGEX_JUMP_ELEMENT.test(abbr)
}

export function getBaseValueOfJump(abbrJump: string): ?number {
  return sov[abbrJump] ? sov[abbrJump].base : null
}

export function getBaseValueOfJumpX(abbrJump: string, x: boolean): ?number {
  const baseValue = getBaseValueOfJump(abbrJump)
  return baseValue && x ? Math.floor(baseValue * 1.1) : baseValue
}

export function getBaseValueOfCombo(abbrCombo: string, x: boolean): ?number {
  return abbrCombo.split("+").reduce((acc, abbrJump) => acc + getBaseValueOfJumpX(abbrJump, x), 0)
}

export function getBaseValue(abbr: string, x: boolean): ?number {
  return getBaseValueOfCombo(abbr, x) || getBaseValueOfJumpX(abbr, x)
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
      return sov[abbr]["base"]
    case -1:
      return sov[abbr]["+1"]
    case -2:
      return sov[abbr]["+2"]
    case -3:
      return sov[abbr]["+3"]
    default:
      return null
  }
}

export function getGoe(abbr: string, judgeValues: Array<number>): ?number {
  if (judgeValues.length < 3) return null

  const sortedJudgeValues = judgeValues.sort((a, b) => b - a)
  const remainingJudgeValues = sortedJudgeValues.slice(1, -1)
  const sum = remainingJudgeValues.reduce((acc, judgeValue) => acc + getGoeValue(abbr, judgeValue), 0)
  const goe = Math.round(sum / remainingJudgeValues.length)

  return goe
}

export default function(input: Object): Object {
  return {
    ...input,
    elements: input.elements.map(element => ({
      ...element,
      baseValue: getBaseValue(element.abbr, element.x),
    })),
  }
}
