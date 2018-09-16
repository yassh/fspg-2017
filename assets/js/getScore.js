export function getBaseValue(abbr) {
  switch (abbr) {
    case "3A":
      return 850
    default:
      return null
  }
}

export function getBaseValueX(abbr, x) {
  const baseValue = getBaseValue(abbr)
  return baseValue && Math.floor(x ? baseValue * 1.1 : baseValue)
}

export default function(input) {
  return {
    ...input,
    elements: input.elements.map(element => ({
      ...element,
      baseValue: getBaseValueX(element.abbr, element.x),
    })),
  }
}
