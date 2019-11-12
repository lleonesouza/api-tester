var {user} = require("./getFakeData");

var useAxios = async r => {
    try{
     var data = await axios({
       method: r.method,
       url: r.url,
       data: r.data
     });
     return data;
    }catch(e){
      console.log(e)
    }
   };

var populateRequest = async r => {
  r.data = user();
  r.axios = await axiosCall();
  r.lastUpdate = "time";
  r.Timer = "tempo da request";
  r.status = 200
  return r;
};



var axiosCall = () => {
    return new Promise(res => setTimeout(() => res(Math.random()), 1500))
}


module.exports = {
  testPosts: async (r, mainWindow) => {
    try{
        let i;
    for (i = 0; i < r.length; i++) {
        console.log('init request', r[i].title)
        let prevR = await populateRequest(r[i])
        let newR = r[i + 1]
        // handleReports(prevR);
        var updates = {prevR, newR}
        if(newR){
          mainWindow.webContents.send("completeRequest", updates);
          console.log('finish request', prevR.title)
         }else{
          mainWindow.webContents.send("completeRequest", updates);
          mainWindow.webContents.send("dispatch", updates.prevR);
          console.log('finish loop')
         }
    }
    }catch(e){
        console.log(e)
    }
  }
};
