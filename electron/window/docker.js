var {start} = require('../controllers/docker')
var {downloadDocker} = require('../controllers/downloads')

var dockerWindow = () => {
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