import { isJumpElement, getBaseValue, getGoe } from "./getScore"

describe("isJumpElement", () => {
  test('"3A" => true', () => {
    expect(isJumpElement("3A")).toEqual(true)
  })

  test('"3Lze<+2T" => true', () => {
    expect(isJumpElement("3Lze<+2T")).toEqual(true)
  })

  test('"3Fe+2T+2Lo" => true', () => {
    expect(isJumpElement("3Fe+2T+2Lo")).toEqual(true)
  })

  test('"3Lo<+1Lo<+3S<<" => true', () => {
    expect(isJumpElement("3Lo<+1Lo<+3S<<")).toEqual(true)
  })

  test('"3T<+2A+SEQ" => true', () => {
    expect(isJumpElement("3T<+2A+SEQ")).toEqual(true)
  })

  test('"3F+REP" => true', () => {
    expect(isJumpElement("3F+REP")).toEqual(true)
  })

  test('"StSq3" => true', () => {
    expect(isJumpElement("StSq3")).toEqual(false)
  })
})

describe("getBaseValue", () => {
  test('"3A" => 850', () => {
    expect(getBaseValue("3A")).toEqual(850)
  })

  test('"3A, x" => 935', () => {
    expect(getBaseValue("3A", true)).toEqual(935)
  })

  test('"3A+3T" => 1280', () => {
    expect(getBaseValue("3A+3T")).toEqual(1280)
  })

  test('"3A+3T, x" => 1408', () => {
    expect(getBaseValue("3A+3T", true)).toEqual(1408)
  })
})

describe("getGoe", () => {
  test('"4Lz", [2, 3, 3, 2, 2, 2, 2, 2, 2] => 214', () => {
    expect(getGoe("4Lz", [2, 3, 3, 2, 2, 2, 2, 2, 2])).toEqual(214)
  })
})
