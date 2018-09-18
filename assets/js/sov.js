// @flow

import { parse } from "papaparse"

const csv = `
"abbr","+3","+2","+1","base","v","v1","-1","-2","-3"
"1T","60","40","20","40","30","null","-10","-20","-30"
`.trim()

const { data } = parse(csv, { header: true })

export default data.reduce((acc, row) => ({ ...acc, [row.abbr]: row }), {})
