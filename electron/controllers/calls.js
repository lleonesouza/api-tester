var {user,product,categorie,correio} = require("./getFakeData");
const R = require('ramda');

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
}


var dataMap = [
  {
    name: 'CREATE_USER',
    data: user,
  },
  {
    name: 'CREATE_PRODUCT',
    data: product,
  },
  {
    name: 'CREATE_CATEGORIE',
    data: categorie,
  },
  {
    name: 'CREATE_CORREIOS',
    data: correio,
  },
]


var handleGetData = (r) => {
  dataMap.map(({name, data}) => {
    if(r.title === name)return data
  })
}

var populateRequest = async r => {
  r.data = await handleGetData(r);
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
    try {
      console.log("Starting Sync Posts Requests");
      console.log("");
      let i;
      let requestArray = [];
      for (i = 0; i < r.length; i++) {
        console.log("init request", r[i].title);
        let prevR = await populateRequest(r[i]);
        // handleReports(prevR);
        requestArray.push(prevR);
        let newR = r[i + 1];
        mainWindow.webContents.send("completeRequest", { prevR, newR });
        if (newR) {
          console.log("finish request", prevR.title);
          requestArray.push(prevR);
          console.log("------");
        } else {
          console.log("finish request", prevR.title);
          requestArray.push(prevR);
          console.log("");
          console.log("finish loop");
          return requestArray;
        }
      }
    } catch (e) {
      console.log(e);
    }
  },

  testPostsAsync: (requests, mainWindow) => {
    let requestArray = [];
    requests.map(async r => {
      try {
        let prevR = await populateRequest(r);
        console.log(prevR)
        // handleReports(prevR);
        requestArray.push(prevR);
      } catch (e) {
        console.log(e);
      }
    return requestArray;
    });
  },

  testPosts2: (Request, mainWindow) => {
    let requestArray = [];
    Request.map(async r => {
      try {
        console.log("init request", r.title);
        let prevR = await populateRequest(r);
        // handleReports(prevR);
        requestArray.push(prevR);
        let newR = r;
        var updates = { prevR, newR };
        // mainWindow.webContents.send("completeRequest", updates);
        if (newR) {
          console.log("finish request", prevR.title);
        } else {
          console.log("finish request", prevR.title);
          console.log("");
          console.log("finish loop");
          console.log(requestArray);
          return requestArray;
        }
      } catch (e) {
        console.log(e);
      }
    });
  },

  testPostSync: (Request, mainWindow) => {
    let requestArray = [];
    Request.map(async r => {
      try {
        console.log("init request", r.title);
        let prevR = await populateRequest(r);
        // handleReports(prevR);
        requestArray.push(prevR);
        let newR = r;
        var updates = { prevR, newR };
        // mainWindow.webContents.send("completeRequest", updates);
        if (newR) {
          console.log("finish request", prevR.title);
        } else {
          console.log("finish request", prevR.title);
          console.log("");
          console.log("finish loop");
          console.log(requestArray);
          return requestArray;
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
};
