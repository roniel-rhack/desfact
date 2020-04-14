const electron = require('electron');
const app = electron.app;
const path = require('path');
const os = require('os');
const isDev = require('electron-is-dev');
const BrowserWindow = electron.BrowserWindow;
require('electron-reload');
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        },

    });
    BrowserWindow.addDevToolsExtension(
        path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Profile 1/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0')
    );

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`,
    )

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});