import getScore, { getBaseValueOfElement, getGoeOfElement, getPcs } from "./getScore"

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

describe("getScore", () => {
  test("OWG2018 Men SP HANYU Yuzuru", () => {
    const input = {
      title: "Olympic Winter Games PyeongChang 2018 - Men Single Skating - Short Program",
      rank: 1,
      name: "HANYU Yuzuru",
      nation: "JPN",
      startingNumber: 25,
      elements: [
        {
          abbr: "4S",
          x: false,
          j: [3, 2, 3, 3, 3, 2, 3, 3, 2],
        },
        {
          abbr: "FCSp4",
          x: false,
          j: [2, 2, 2, 2, 2, 2, 2, 3, 2],
        },
        {
          abbr: "CSSp4",
          x: false,
          j: [2, 3, 3, 3, 3, 2, 3, 3, 3],
        },
        {
          abbr: "3A",
          x: true,
          j: [3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
        {
          abbr: "4T+3T",
          x: true,
          j: [3, 2, 2, 3, 2, 2, 3, 3, 3],
        },
        {
          abbr: "StSq4",
          x: false,
          j: [2, 3, 3, 3, 3, 3, 3, 3, 3],
        },
        {
          abbr: "CCoSp3",
          x: false,
          j: [2, 3, 2, 3, 3, 3, 2, 3, 3],
        },
      ],
      programComponents: {
        factor: 1,
        skatingSkills: {
          j: [1000, 975, 1000, 975, 975, 950, 950, 975, 950],
        },
        transitions: {
          j: [900, 950, 975, 950, 950, 925, 875, 975, 950],
        },
        performance: {
          j: [1000, 975, 1000, 1000, 975, 975, 975, 1000, 975],
        },
        composition: {
          j: [950, 1000, 975, 975, 975, 975, 950, 1000, 975],
        },
        interpretation: {
          j: [950, 975, 975, 1000, 975, 975, 950, 1000, 975],
        },
      },
    }

    const output = {
      title: "Olympic Winter Games PyeongChang 2018 - Men Single Skating - Short Program",
      rank: 1,
      name: "HANYU Yuzuru",
      nation: "JPN",
      startingNumber: 25,
      elements: [
        {
          abbr: "4S",
          x: false,
          j: [3, 2, 3, 3, 3, 2, 3, 3, 2],
          bv: 1050,
          goe: 271,
          sop: 1321,
        },
        {
          abbr: "FCSp4",
          x: false,
          j: [2, 2, 2, 2, 2, 2, 2, 3, 2],
          bv: 320,
          goe: 100,
          sop: 420,
        },
        {
          abbr: "CSSp4",
          x: false,
          j: [2, 3, 3, 3, 3, 2, 3, 3, 3],
          bv: 300,
          goe: 143,
          sop: 443,
        },
        {
          abbr: "3A",
          x: true,
          j: [3, 3, 3, 3, 3, 3, 3, 3, 3],
          bv: 935,
          goe: 300,
          sop: 1235,
        },
        {
          abbr: "4T+3T",
          x: true,
          j: [3, 2, 2, 3, 2, 2, 3, 3, 3],
          bv: 1606,
          goe: 257,
          sop: 1863,
        },
        {
          abbr: "StSq4",
          x: false,
          j: [2, 3, 3, 3, 3, 3, 3, 3, 3],
          bv: 390,
          goe: 210,
          sop: 600,
        },
        {
          abbr: "CCoSp3",
          x: false,
          j: [2, 3, 2, 3, 3, 3, 2, 3, 3],
          bv: 300,
          goe: 136,
          sop: 436,
        },
      ],
      programComponents: {
        factor: 1,
        skatingSkills: {
          j: [1000, 975, 1000, 975, 975, 950, 950, 975, 950],
          sop: 971,
        },
        transitions: {
          j: [900, 950, 975, 950, 950, 925, 875, 975, 950],
          sop: 943,
        },
        performance: {
          j: [1000, 975, 1000, 1000, 975, 975, 975, 1000, 975],
          sop: 986,
        },
        composition: {
          j: [950, 1000, 975, 975, 975, 975, 950, 1000, 975],
          sop: 975,
        },
        interpretation: {
          j: [950, 975, 975, 1000, 975, 975, 950, 1000, 975],
          sop: 975,
        },
      },
      tes: 6318,
      tpcs: 4850,
      tss: 11168,
    }

    expect(getScore(input)).toEqual(output)
  })
})
