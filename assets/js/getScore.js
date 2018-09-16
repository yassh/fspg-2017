export function getBaseValueOfJump(abbrJump) {
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

export function getBaseValueOfJumpX(abbrJump, x) {
  const baseValue = getBaseValueOfJump(abbrJump)
  return baseValue && x ? Math.floor(baseValue * 1.1) : baseValue
}

export function getBaseValueOfCombo(abbrCombo, x) {
  return abbrCombo.split("+").reduce((acc, abbrJump) => acc + getBaseValueOfJumpX(abbrJump, x), 0)
}

export function getBaseValue(abbr, x) {
  return getBaseValueOfCombo(abbr, x) || getBaseValueOfJump(abbr, x)
}

export default function(input) {
  return {
    ...input,
    elements: input.elements.map(element => ({
      ...element,
      baseValue: getBaseValue(element.abbr, element.x),
    })),
  }
}
