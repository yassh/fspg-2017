import { getBaseValue } from "./getScore"

describe("getBaseValue", () => {
  it('"3A" => 850', () => {
    expect(getBaseValue("3A")).toEqual(850)
  })
})
