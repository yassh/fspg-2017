import getOutput from "./getOutput"

describe("getOutput", () => {
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

    expect(getOutput(input)).toEqual(output)
  })
})
