const {app, BrowserWindow} = require('electron')
const {autoUpdater} = require('electron-updater')
// Handle install/uninstall/update events, create desktop shortcut
if (require('electron-squirrel-startup')) app.quit()
const path = require('path')
const rimraf = require('rimraf')
const url = require('url')

let win

let appPath = isDev()
  ? 'index-dev.html'
  : 'index-static.html'

function createWindow () {
  win = new BrowserWindow({
    width: 1800,
    height: 900,
    minWidth: 880,
    minHeight: 630,
    icon: 'resources/techsol-new-logo.jpg',
    backgroundColor: 'grey'
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'static', appPath),
    protocol: 'file',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })

  // Development mode
  isDev() && win.webContents.openDevTools()
}

const squirrelCmd = process.argv[1]

if (squirrelCmd === '--squirrel-uninstall') {
  rimraf.sync(app.getPath('userData'))
}

app.setAppUserModelId('com.squirrel.sis.sIS')

const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  if (win) {
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

if (shouldQuit) {
  app.quit()
}

app.on('ready', createWindow)

autoUpdater.on('update-available', () => {
  console.log('update available')
})

autoUpdater.on('checking-for-update', () => {
  console.log('checking for update')
})

autoUpdater.on('update-not-available', () => {
  console.log('update not available')
})

autoUpdater.on('update-downloaded', (e) => {
  console.log(e)
  autoUpdater.quitAndInstall()
})

autoUpdater.setFeedURL('http://example.com')

autoUpdater.checkForUpdates()

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function isDev () {
  return process.env.NODE_ENV !== 'production' && process.defaultApp
}
