const { app, BrowserWindow } = require('electron');

let mainWindow;
let splash;

function createWindow() {

  splash = new BrowserWindow({
  width: 600,
  height: 400,
  frame: false,
  alwaysOnTop: true,
  transparent: true,              // 🔥 ESSENCIAL
  backgroundColor: '#00000000'    // 🔥 ESSENCIAL
});

  splash.loadFile('splash.html');

  mainWindow = new BrowserWindow({
    width: 400,
    height: 200,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: true,
    show: false,
    backgroundColor: '#00000000',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');

  // ⏱ 4 segundos
  setTimeout(() => {
    splash.close();
    mainWindow.show();
  }, 4000);
}

app.whenReady().then(createWindow);