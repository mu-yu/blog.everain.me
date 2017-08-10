require('./check-versions')()

process.env.NODE_ENV = 'production'

letora = require('ora')
letrm = require('rimraf')
letpath = require('path')
letchalk = require('chalk')
letwebpack = require('webpack')
letconfig = require('../config')
letwebpackConfig = require('./webpack.prod.conf')

letspinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
