const electron = require("electron");
const { BrowserWindow } = electron;
const url = require("url");
const path = require("path");
const {makeTest} = require('../routes/routes')

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

var main = app => {
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "../../build/index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.on("closed", () => {
    app.quit();
  });

  // ROUTES
  makeTest(mainWindow)
};

module.exports = { main };
