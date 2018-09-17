// @flow

export function getBaseValueOfJump(abbrJump: string): ?number {
  switch (abbrJump) {
    case "3T":
      return 430
    case "3S":
      return 440
    case "3Lo":
      return 510
    case "3F":
      return 530
    case "3Lz":
      return 650
    case "3A":
      return 850
    default:
      return null
  }
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

export function getGoeValueOfJump(abbrJump: string, judgeValue: number): ?number {
  if (abbrJump === "4Lz") {
    if (judgeValue === 3) return 300
    if (judgeValue === 2) return 200
    if (judgeValue === 1) return 100
    if (judgeValue === 0) return 0
    if (judgeValue === -1) return -120
    if (judgeValue === -2) return -240
    if (judgeValue === -3) return -400
  }

  return null
}

export function getGoe(abbr: string, judgeValues: Array<number>): ?number {
  if (judgeValues.length < 3) return null

  const sortedJudgeValues = judgeValues.sort((a, b) => b - a)
  const remainingJudgeValues = sortedJudgeValues.slice(1, -1)
  const sum = remainingJudgeValues.reduce((acc, judgeValue) => acc + getGoeValueOfJump(abbr, judgeValue), 0)
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
