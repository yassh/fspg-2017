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

export default function(input: Object): Object {
  return {
    ...input,
    elements: input.elements.map(element => ({
      ...element,
      baseValue: getBaseValue(element.abbr, element.x),
    })),
  }
}
