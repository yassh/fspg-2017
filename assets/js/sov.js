// @flow

import { parse } from "papaparse"

const csv = `
"abbr","+3","+2","+1","base","v","v1","-1","-2","-3"
"1T","60","40","20","40","30","","-10","-20","-30"
"3T","210","140","70","430","300","","-70","-140","-210"
"3A","300","200","100","850","590","","-100","-200","-300"
`.trim()

const { data } = parse(csv, { header: true, dynamicTyping: true })

export default data.reduce((acc, row) => ({ ...acc, [row.abbr]: row }), {})
