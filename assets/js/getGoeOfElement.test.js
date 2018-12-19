import getGoeOfElement from "./getGoeOfElement"

describe("getGoeOfElement", () => {
  describe("Jumps", () => {
    test('"4Lz", [2, 3, 3, 2, 2, 2, 2, 2, 2] => 214', () => {
      expect(getGoeOfElement("4Lz", [2, 3, 3, 2, 2, 2, 2, 2, 2])).toEqual(214)
    })

    test('"3F+1Lo+3S", [0, 2, 2, 1, 1, 1, 2, 1, 1] => 90', () => {
      expect(getGoeOfElement("3F+1Lo+3S", [0, 2, 2, 1, 1, 1, 2, 1, 1])).toEqual(90)
    })

    test('"4T+REP", [-1, -2, -2, -2, -2, -1, -2, -2, -1] => -206', () => {
      expect(getGoeOfElement("4T+REP", [-1, -2, -2, -2, -2, -1, -2, -2, -1])).toEqual(-206)
    })
  })

  describe("Spins", () => {
    test('"LSp4", [2, 2, 2, 2, 1, 2, 1, 1, 2] => 86', () => {
      expect(getGoeOfElement("LSp4", [2, 2, 2, 2, 1, 2, 1, 1, 2])).toEqual(86)
    })

    test('"FSSp4", [1, 1, 1, 0, 1, 1, 0, 1, 1] => 43', () => {
      expect(getGoeOfElement("FSSp4", [1, 1, 1, 0, 1, 1, 0, 1, 1])).toEqual(43)
    })
  })

  describe("Step and Choreographic Sequences", () => {
    test('"StSq4", [2, 2, 2, 2, 1, 2, 2, 1, 2] => 130', () => {
      expect(getGoeOfElement("StSq4", [2, 2, 2, 2, 1, 2, 2, 1, 2])).toEqual(130)
    })

    test('"ChSq1", [3, 2, 2, 2, 1, 2, 3, 2, 2] => 150', () => {
      expect(getGoeOfElement("ChSq1", [3, 2, 2, 2, 1, 2, 3, 2, 2])).toEqual(150)
    })
  })
})
