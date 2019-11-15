const electron = require("electron");
const { main } = require("./electron/window/index");
const { app, Menu } = electron;
const path = require("path");
require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron")
});
process.env.NODE_ENV = "!production";

// Listing App
app.on("ready", () => {
  // Load Windows
  main(app);
  // Set Up Custom Manu
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
    submenu: [
      {
        label: "Toggle DevTools",
        accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: "reload"
      }
    ]
  });
}
