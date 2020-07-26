import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  // create main browser window
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 700,
    useContentSize: true,
    show: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  // // create a new `splash`-Window 
  // let splash = new BrowserWindow({
  //   width: 450,
  //   height: 300,
  //   frame: false,
  //   alwaysOnTop: true,
  // });
  // splash.loadURL(winURL + "/splash")

    // splash.on('closed', () => {
  //   splash = null
  // })

  mainWindow.loadURL(winURL)

  // // if main window is ready to show, then destroy the splash window and show up the main window
  // mainWindow.once('ready-to-show', () => {
  //   setTimeout(() => {
  //     splash.destroy();
  //     mainWindow.show();
  //   }, 0);
  // });

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */