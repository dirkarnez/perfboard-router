// https://github.com/tscircuit/specctra-dsn-json/blob/main/lib/convert-array-dsn-to-dsn.ts
function serializeSExpression(sexp: any[]): string {
  function serialize(sexp: any): string {
    if (Array.isArray(sexp)) {
      return `(${sexp.map(serialize).join(" ")})`
    } else if (typeof sexp === "string") {
      // Escape quotes in strings
      return sexp.replace(/"/g, '\\"')
    } else {
      return sexp.toString()
    }
  }

  return serialize(sexp)
}

const convertArrayDsnToDsn = (arrayData: any[]) => {
  return serializeSExpression(arrayData)
}


console.log(convertArrayDsnToDsn(JSON.parse(`
    [
      "wire",
      [
        "path",
        "F.Cu",
        "381",
        "27266.8",
        "-61605",
        "27266.8",
        "-58320.7"
      ],
      [
        "net",
        "GND"
      ],
      [
        "type",
        "protect"
      ]
    ]
`)))
