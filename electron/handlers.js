const electron = require("electron");
const url = require("url");
const path = require("path");
const { BrowserWindow, ipcMain } = electron;
const axios = require('axios')
var {testPosts}  = require('./ipcMain')


var saveReport = r => {
  console.log('save r')
  return r
}

var errorHandler = r => {
  console.log('sendMessage to Email',
  'sendMessage to Cellphone')
  saveReport(r)
  return r
}

var handleReports = r => {
    switch (r.axios.status) {
      case 200:
        return saveReport(r);
      case 401:
        return errorHandler(r);
      case 300:
        return errorHandler(r);
      default:
        return r
    }
  };



module.exports = {
  mainWindow(app) {
    let mainWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true
      }
    });
    var buildURL = url.format({
      
      pathname: path.join(__dirname, "../build/index.html"),
      protocol: "file:",
      slashes: true
    })
    mainWindow.loadURL(buildURL);
    mainWindow.on("closed", () => {
      app.quit();
    });

    ipcMain.on("test:posts", (e, r) => {

      testPosts(r, mainWindow)
    
    });
    
    ipcMain.on("test:gets", (e, r) => {
        r.data = generate(r.title);
        r.axios = useAxios(r);
        r.lastUpdate = 'time';
        r.Timer = "tempo da request";
        handleReports(r)
        ipcMain.send("sendState", r);
      });
    
      ipcMain.on('test:start', () => {
    
      })

  },

  createAddWindow() {
    let salesWindow;
    salesWindow = new BrowserWindow({
      width: 300,
      height: 300,
      title: "Add Shopping List Item"
    });

    salesWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "../build/index.html"),
        protocol: "file:",
        slashes: true
      })
    );

    salesWindow.on("close", () => {
      salesWindow = null;
    });
  }
};
