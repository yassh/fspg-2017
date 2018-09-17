// @flow

import { parse } from "papaparse"

const csv = `
"A","B"
"alpha","beta"
"apple","banana"
`.trim()

export default parse(csv, { header: true }).data
