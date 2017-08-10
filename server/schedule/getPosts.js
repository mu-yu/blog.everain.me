const {promisify} = require('util')
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

let readDirAsync = promisify(fs.readdir)

async function getPostsData () {
  let posts = []
  let postsPath = path.resolve(__dirname, '..', 'posts')
  const dirInfo = await readDirAsync(postsPath)

  dirInfo
    .filter(filename => filename.endsWith('.yaml'))
    .forEach(metaFileName => {
      let post = yaml.safeLoad(fs.readFileSync(path.resolve(postsPath, metaFileName)))
      post.file = post.file || metaFileName.split('.yaml')[0]

      posts.push(post)
    })
  global.database.posts = posts
}

module.exports = function () {
  const interval = 5 * 60 * 1000

  getPostsData().then(() => {
    setInterval(() => getPostsData(), interval)
  })
}
