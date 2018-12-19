import getPcs from "./getPcs"

describe("getPcs", () => {
  test("[1000, 950, 950, 950, 925, 950, 900, 925, 900] => 936", () => {
    expect(getPcs([1000, 950, 950, 950, 925, 950, 900, 925, 900])).toEqual(936)
  })
})
