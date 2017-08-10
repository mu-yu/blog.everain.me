const logger = require('koa-logger')
const koaBody = require('koa-body')
const Koa = require('koa')

const rest = require('./utils/middleware/rest')
const controller = require('./utils/controller')

const config = require('./config')
require('./schedule')()

global.database = {}

const app = module.exports = new Koa()

// middleware
app.use(logger())
app.use(koaBody())

app.use(rest.restify('/api/'))
app.use(controller)

// listen
if (!module.parent) app.listen(config.port)
