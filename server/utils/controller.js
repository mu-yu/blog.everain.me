const fs = require('fs')
const path = require('path')
const router = require('koa-router')()

function addMapping (router, mapping) {
  for (let url in mapping) {
    if (url.startsWith('GET ')) {
      let path = url.substring(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST ')) {
      let path = url.substring(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

function addControllers (router) {
  let files = fs.readdirSync(path.resolve(__dirname, '..', 'controllers'))
  let controllers = files.filter(file => file.endsWith('.js'))

  for (let controller of controllers) {
    console.log(`process controller: ${controller}...`)
    let mapping = require(path.resolve(__dirname, '../controllers', controller))
    addMapping(router, mapping)
  }
}

// 自动引入所有 controller
addControllers(router)
module.exports = router.routes()
