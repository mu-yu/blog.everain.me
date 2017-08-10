let indexFn = async (ctx, next) => {
  ctx.redirect('/list')
  await next()
}

module.exports = {
  'GET /': indexFn,
  'GET /index': indexFn,
  'GET /index.html': indexFn,
}
