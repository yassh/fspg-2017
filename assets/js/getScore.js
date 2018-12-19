// @flow
import _ from "lodash"
import getBaseValueOfElement from "./getBaseValueOfElement"
import getGoeOfElement from "./getGoeOfElement"
import getPcs from "./getPcs"

export default function getScore(input: Object): Object {
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
