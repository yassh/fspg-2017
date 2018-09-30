import { isJump } from "./is"

describe("isJump", () => {
  test('"3A" => true', () => {
    expect(isJump("3A")).toEqual(true)
  })

  test('"3Lze<+2T" => true', () => {
    expect(isJump("3Lze<+2T")).toEqual(true)
  })

  test('"3Fe+2T+2Lo" => true', () => {
    expect(isJump("3Fe+2T+2Lo")).toEqual(true)
  })

  test('"3Lo<+1Lo<+3S<<" => true', () => {
    expect(isJump("3Lo<+1Lo<+3S<<")).toEqual(true)
  })

  test('"3T<+2A+SEQ" => true', () => {
    expect(isJump("3T<+2A+SEQ")).toEqual(true)
  })

  test('"3F+REP" => true', () => {
    expect(isJump("3F+REP")).toEqual(true)
  })

  test('"StSq3" => false', () => {
    expect(isJump("StSq3")).toEqual(false)
  })
})
