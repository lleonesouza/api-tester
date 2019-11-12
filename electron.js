const electron = require("electron");
const handler = require("./electron/handlers");
const { app, Menu, ipcMain } = electron;
const os = require('os')
const path = require('path')

process.env.NODE_ENV = '!production';
require('electron-reload')(__dirname,{
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// Listing App
app.on("ready", () => {
  handler.mainWindow(app);

  // console.log(os.type())
  // console.log(path.parse(__filename).dir)
  // console.log(path.parse(__dirname))

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Item",
        click() {
          handler.createAddWindow();
        }
      },
      {
        label: "Create Item"
      },
      {
        label: "Quit",
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];

// If Mac, add empty object to menu
if (process.platform == "darwin") {
  mainMenuTemplate.unshit({});
}

//Add Developoer tools if not in prodution
if (process.env.NODE_ENV !== "production") {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu:[
      {
        label: "Toggle DevTools",
        accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
          role: 'reload'
      }
    ]
  });
}
