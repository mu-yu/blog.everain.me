const fs = require('fs')
const util = require('util')
const showdown = require('showdown')

showdown.setFlavor('github')
const converter = new showdown.Converter()
const readFileAsync = util.promisify(fs.readFile)

module.exports = async function markdownParser (filePath) {
  let fileContent = await readFileAsync(filePath)
  return converter.makeHtml(fileContent.toString())
}

