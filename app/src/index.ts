import { app, BrowserWindow, shell } from "electron";
import Window from "./components/window";
import { startServer } from "./server";
import path from "path";
import electronLog from "electron-log";

// const createWindow = async () => {
//   const RESOURCES_PATH = app.isPackaged
//     ? path.join(process.resourcesPath, "assets")
//     : path.join(__dirname, "../assets");

//   const getAssetPath = (...paths: string[]): string => {
//     return path.join(RESOURCES_PATH, ...paths);
//   };

//   mainWindow = new BrowserWindow({
//     show: false,
//     width: 1024,
//     height: 728,
//     icon: getAssetPath("icon.png"),
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });

//   mainWindow.loadURL("http://127.0.0.1:8889");

//   mainWindow.webContents.openDevTools();

//   // @TODO: Use 'ready-to-show' event
//   //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
//   mainWindow.webContents.on("did-finish-load", () => {
//     if (!mainWindow) {
//       throw new Error('"mainWindow" is not defined');
//     }
//     if (process.env.START_MINIMIZED) {
//       mainWindow.minimize();
//     } else {
//       mainWindow.show();
//       mainWindow.focus();
//     }
//   });

//   mainWindow.on("closed", () => {
//     mainWindow = null;
//   });

//   // Open urls in the user's browser
//   mainWindow.webContents.on("new-window", (event, url) => {
//     event.preventDefault();
//     shell.openExternal(url);
//   });
// };

// /**
//  * Add event listeners...
//  */

// app.on("window-all-closed", () => {
//   // Respect the OSX convention of having the application in memory even
//   // after all windows have been closed
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.whenReady().then(createWindow2).catch(console.log);

// app.on("activate", () => {
//   // On macOS it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) createWindow2();
// });

class Application {
  private _mainWindow;

  run() {
    // 启动后台服务器
    startServer();

    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        app.quit();
      }
    });

    app
      .whenReady()
      .then(() => this.createWindow())
      .catch(console.log);

    app.on("activate", () => {
      if (this._mainWindow === null) this.createWindow();
    });
  }

  private createWindow() {
    electronLog.error("========", path.join(__dirname, "preloadMain.js"));
    this._mainWindow = new Window({
      title: "",
      fullscreen: true,
      resizable: false,
      minimizable: true,
      maximizable: true,
      webPreferences: {
        preload: path.join(__dirname, "preloadRender.js"),
        contextIsolation: false,
        nodeIntegration: true
      },
    });

    this._mainWindow.loadURL("http://127.0.0.1:8889");

    this._mainWindow.openDevTools();
  }
}

new Application().run();
