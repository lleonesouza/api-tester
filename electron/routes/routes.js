const electron = require("electron");
const { ipcMain } = electron;
const { testPosts } = require('../controllers/calls')

// Start All Request Sync
module.exports = {
    startRequests: (mainWindow) => ipcMain.handle("startRequest", async (event, r) => {
        const result = await testPosts(r, mainWindow);
        return result;
    }),

    
}



var makePosts = ipcMain.on("test:posts", (e, r) => {
  testPosts(r, mainWindow);
});

var testGets =ipcMain.on("test:gets", (e, r) => {
  r.data = generate(r.title);
  r.axios = useAxios(r);
  r.lastUpdate = "time";
  r.Timer = "tempo da request";
  handleReports(r);
  ipcMain.send("sendState", r);
});

var testPuts = ipcMain.on("test:start", () => {});

// Main process
var testDelete = ipcMain.handle("test:delete", async (event, r) => {
  const result = await testPosts(r, mainWindow);
  return result;
});

//Start
