const electron = require("electron");
const { ipcMain } = electron;
const {
  createRequest,
  deleteRequest,
  updateRequest,
  newContext,
  getContexts,
  getContext,
  delContext,
  delAllContext,
  setLocalContext,
  getLocalContext
} = require("../controllers/context");

// title = title of context
// request = object request

// Start All Request Sync
module.exports = {
  createRequest: () =>
    ipcMain.handle(
      "context:createRequest",
      async (event, { title, request }) => {
        return await createRequest(title, request);
      }
    ),

  deleteRequest: () =>
    ipcMain.handle(
      "context:deleteRequest",
      async (event, { title, request }) => {
        return await deleteRequest(title, request);
      }
    ),

  updateRequest: () =>
    ipcMain.handle(
      "context:updateRequest",
      async (event, { title, request }) => {
        return await updateRequest(title, request);
      }
    ),

  deleteRequest: () =>
    ipcMain.handle(
      "context:deleteRequest",
      async (event, { title, request }) => {
        return await deleteRequest(title, request);
      }
    ),

    newContext: () =>
    ipcMain.handle(
      "context:newContext",
      async (event, context ) => {
        return await newContext(context);
      }
    ),
    getContexts: () =>
    ipcMain.handle(
      "context:getContexts",
      async (event) => {
        return await getContexts();
      }
    ),
    getContext: () =>
    ipcMain.handle(
      "context:getContext",
      async (event, title) => {
        return await getContext(title);
      }
    ),
    delContext: () =>
    ipcMain.handle(
      "context:delContext",
      async (event, title) => {
        return await delContext(title);
      }
    ),
    delAllContext: () =>
    ipcMain.handle(
      "context:delAllContext",
      async (event) => {
        return await delAllContext();
      }
    ),
    setLocalContext: () =>
    ipcMain.handle(
      "context:setLocalContext",
      async (event, title) => {
        return await setLocalContext(title);
      }
    ),
    getLocalContext: () =>
    ipcMain.handle(
      "context:getLocalContext",
      async (event) => {
        return await getLocalContext();
      }
    ),
};



