const electron = require("electron");
const url = require("url");
const path = require("path");
const { BrowserWindow, ipcMain } = electron;
const axios = require("axios");
var { testPosts } = require("./ipcMain");
var {downloadDocker}  = require  ('./controllers/downloads')
console.log(downloadDocker)

var saveReport = r => {
  console.log("save r");
  return r;
};

var errorHandler = r => {
  console.log("sendMessage to Email", "sendMessage to Cellphone");
  saveReport(r);
  return r;
};

var handleReports = r => {
  switch (r.axios.status) {
    case 200:
      return saveReport(r);
    case 401:
      return errorHandler(r);
    case 300:
      return errorHandler(r);
    default:
      return r;
  }
};

module.exports = {
  mainWindow(app) {
  
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

    ipcMain.handle("download", async (event, r) => {
      const result = await testPosts(r, mainWindow);;
       return result;
     });
  }



}