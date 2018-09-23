import { getBaseValue, getGoe, getPcSop } from "./getScore"

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

describe("getPcSop", () => {
  test("[1000, 950, 950, 950, 925, 950, 900, 925, 900] => 936", () => {
    expect(getPcSop([1000, 950, 950, 950, 925, 950, 900, 925, 900])).toEqual(936)
  })
})
