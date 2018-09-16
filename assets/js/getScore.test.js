import { getBaseValue } from "./getScore"

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
