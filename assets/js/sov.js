// @flow

import data from "../data/sov.json"

export default data.reduce((acc, row) => ({ ...acc, [row.abbr]: row }), {})
