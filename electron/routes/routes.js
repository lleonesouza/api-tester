const electron = require("electron");
const { ipcMain } = electron;
const { testPosts, test } = require('../controllers/calls')

// Start All Request Sync
module.exports = {
    makeTest: (mainWindow) => ipcMain.handle("test", async (event, r) => {
      return await test(mainWindow, r)
  })
}