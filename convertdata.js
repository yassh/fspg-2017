const fs = require("fs")
const Papa = require("papaparse")

const csv = fs.readFileSync("./assets/data/sov.csv", "utf8")
const { data } = Papa.parse(csv, { header: true, dynamicTyping: true, skipEmptyLines: true })
const jsonString = JSON.stringify(data, null, "  ")

fs.writeFileSync("./assets/data/sov.json", jsonString, "utf8")
