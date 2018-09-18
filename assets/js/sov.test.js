import sov from "./sov"

test("1T", () => {
  expect(sov["1T"]).toEqual({
    abbr: "1T",
    "+3": 60,
    "+2": 40,
    "+1": 20,
    base: 40,
    v: 30,
    v1: null,
    "-1": -10,
    "-2": -20,
    "-3": -30,
  })
})
