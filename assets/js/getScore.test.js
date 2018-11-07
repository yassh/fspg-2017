import { getBaseValueOfElement, getGoeOfElement, getPcs } from "./getScore"

describe("getBaseValueOfElement", () => {
  describe("Jumps", () => {
    test('"3A" => 850', () => {
      expect(getBaseValueOfElement("3A")).toEqual(850)
    })

    test('"3A, x" => 935', () => {
      expect(getBaseValueOfElement("3A", true)).toEqual(935)
    })

    test('"3A+3T" => 1280', () => {
      expect(getBaseValueOfElement("3A+3T")).toEqual(1280)
    })

    test('"3A+3T, x" => 1408', () => {
      expect(getBaseValueOfElement("3A+3T", true)).toEqual(1408)
    })

    test('"3Fe" => 370', () => {
      expect(getBaseValueOfElement("3Fe")).toEqual(370)
    })

    test('"3Fe<" => 320', () => {
      expect(getBaseValueOfElement("3Fe<")).toEqual(320)
    })

    test('"3Fe, x" => 407', () => {
      expect(getBaseValueOfElement("3Fe", true)).toEqual(407)
    })

    test('"3A+REP" => 595', () => {
      expect(getBaseValueOfElement("3A+REP")).toEqual(595)
    })

    test('"3A<+REP, x" => 454', () => {
      expect(getBaseValueOfElement("3A<+REP", true)).toEqual(454)
    })
  })

  describe("Spins", () => {
    test('"LSp4" => 270', () => {
      expect(getBaseValueOfElement("LSp4")).toEqual(270)
    })

    test('"FSSp4" => 300', () => {
      expect(getBaseValueOfElement("FSSp4")).toEqual(300)
    })

    test('"CCSp4" => 320', () => {
      expect(getBaseValueOfElement("CCSp4")).toEqual(320)
    })

    test('"FCSSp4" => 300', () => {
      expect(getBaseValueOfElement("FCSSp4")).toEqual(300)
    })

    test('"FCCoSp4" => 350', () => {
      expect(getBaseValueOfElement("FCCoSp4")).toEqual(350)
    })
  })

  describe("Step and Choreographic Sequences", () => {
    test('"StSq4" => 390', () => {
      expect(getBaseValueOfElement("StSq4")).toEqual(390)
    })

    test('"ChSq1" => 200', () => {
      expect(getBaseValueOfElement("ChSq1")).toEqual(200)
    })
  })
})

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

describe("getPcs", () => {
  test("[1000, 950, 950, 950, 925, 950, 900, 925, 900] => 936", () => {
    expect(getPcs([1000, 950, 950, 950, 925, 950, 900, 925, 900])).toEqual(936)
  })
})
