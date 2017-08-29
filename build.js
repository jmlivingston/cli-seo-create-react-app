const fs = require('fs-extra')
const path = require('path')

const serverDir = path.join(__dirname, 'server')
const deployDir = path.join(__dirname, 'deploy')
const clientDir = path.join(__dirname, 'build')

if (!clientDir) {
  throw new Error('Can\'t find build folder. Did you run the CLI build first?')
}
fs.emptyDirSync('./deploy')
fs.copySync(clientDir, path.join(deployDir, 'client'))
fs.copySync(serverDir, path.join(deployDir, 'server'))
