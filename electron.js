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
    label: "New",
    submenu: [
      {
        label: "new Request",
        click() {
          handler.createAddWindow();
        }
      },
      {
        label: "new Test",
        click() {
          handler.createAddWindow();
        }
      },
      {
        label: "new Server"
      },
      {
        label: "new Expose"
      },
      {
        label: "Quit",
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  },

  {
    label: "DataBases",
    submenu: [
      {
        label: "MongoDB",
        click() {
          handler.createAddWindow();
        }
      },
      {
        label: "PostgreeSQL",
        click() {
          handler.createAddWindow();
        }
      },
      {
        label: "Redis",
        click() {
          handler.createAddWindow();
        }
      }
    ]
  },
  
  {
    label: "Config",
    submenu: [
      {
        label: "Contexts",
        click() {
          handler.createAddWindow();
        }
      },
      {
        label: "Docker",
        click() {
          handler.createAddWindow();
        }
      },
      {
        label: "Config",
        click() {
          handler.createAddWindow();
        }
      }
    ]
  },


  {
    label: "Software",
    submenu: [
      {
        label: "Author",
        click() {
          handler.createAddWindow();
        }
      },
      {
        label: "Donate",
        click() {
          handler.createAddWindow();
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
