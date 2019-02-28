module.exports = (rawName) => {
  let properFullName = []
  const splitRawName = rawName.split(" ")
  splitRawName.forEach(function(splitName) {
    properFullName.push(`${splitName[0].toUpperCase()}${splitName.slice(1).toLowerCase()}`)
  })

  return properFullName.join(" ");
}
