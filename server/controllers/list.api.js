let listAll = async (ctx, next) => {
  ctx.rest(global.database.posts)
}

module.exports = {
  'GET /api/list/all': listAll,
}
