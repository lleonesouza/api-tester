const { ipcRenderer } = window.require("electron");

module.exports = {
  // Requests
  createRequest: async (title, request) => {
    console.log("createRequest");
    var res = await ipcRenderer.invoke("context:createRequest", {
      title,
      request
    });
    return res;
  },
  deleteRequest: async (title, request) => {
    console.log("deleteRequest");
    var res = await ipcRenderer.invoke("context:deleteRequest", {
      title,
      request
    });
    return res;
  },
  updateRequest: async (title, request) => {
    console.log("updateRequest");
    var res = await ipcRenderer.invoke("context:updateRequest", {
      title,
      request
    });
    return res;
  },
  // Contexts
  newContext: async context => {
    console.log("newContext");
    var res = await ipcRenderer.invoke("context:newContext", context);
    return res;
  },
  delContext: async title => {
    console.log("delContext");
    var res = await ipcRenderer.invoke("context:delContext", title);
    return res;
  },
  delAllContext: async () => {
    console.log("delAllContext");
    var res = await ipcRenderer.invoke("context:delAllContext");
    return res;
  },
  // Local
  setLocalContext: async context => {
    console.log("setLocalContext");
    var res = await ipcRenderer.invoke("context:setLocalContext", context);
    return res;
  },
  getLocalContext: async () => {
    console.log("getLocalContext");
    var res = await ipcRenderer.invoke("context:getLocalContext");
    return res;
  }
};
