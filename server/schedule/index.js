const getPosts = require('./getPosts')
const getArchive = require('./archive')

module.exports = function () {
  getPosts()
  getArchive()
}
