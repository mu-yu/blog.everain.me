const path = require('path')
const parser = require('../utils/markdownParser')

const APIError = require('../utils/middleware/rest').APIError

module.exports = {
  'GET /api/post/:file': async (ctx, next) => {
    let file = ctx.params.file
    if (file) {
      let filePath = path.resolve(__dirname, '..', 'posts', file)
      ctx.rest({file: await parser(filePath)})
    } else {
      throw new APIError('post:not_found', 'post not found by id.')
    }
  },
}
