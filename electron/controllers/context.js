const storage = require("electron-json-storage");
const bluebird = require("bluebird");

var isContext = value => {
  return value.type === "context";
};
var notContext = value => {
  return value.type !== "context";
};

var getAll = bluebird.promisify(storage.getAll);
var getMany = bluebird.promisify(storage.getMany);
var get = bluebird.promisify(storage.get);
var set = bluebird.promisify(storage.set);
var exists = bluebird.promisify(storage.has);
var remove = bluebird.promisify(storage.remove);
var clear = bluebird.promisify(storage.clear);

// Update Request Context
var updateRequest = async (title, requests) => {
  try {
    var exist = await exists(title);
    if (!exist) {
      var context = await get(title, requests);
      context.requests = requests;
      await set(context);
      return context;
    } else {
      throw new Error("Context Doesnt Exists");
    }
  } catch (e) {
    throw e;
  }
};

// Create new Request
var createRequest = async (title, requests) => {

}

// Delete Request 
var deleteRequest = async (title, requests) => {

}

// Create new Context
var newContext = async context => {
  try {
    if (context.title !== "local") {
      var exist = await exists(context.title);
      if (!exist) {
        await set(context.title, context);
        return context;
      } else {
        throw new Error("Context Already Exists");
      }
    } else throw new Error(" You Cannot Set the Name of Context to -local- ");
  } catch (e) {
    throw e;
  }
};

// Get All Context
var getContexts = async () => {
  try {
    var contexts = Object.values(await getAll());
    return contexts.filter(isContext);
  } catch (e) {
    console.log(e);
  }
};

// Get Context
var getContext = async (title) => {
  try {
    var contexts = await get(title);
    return contexts.filter(isContext);
  } catch (e) {
    console.log(e);
  }
};

// Remove Context
var delContext = async (title) => {
  try {
    remove(title);
  } catch (e) {
    throw e;
  }
};

// Remove All Contexts
var delAllContext = async () => {
  try {
    var allValues = Object.values(await getAll());
    var contexts = allValues.filter(isContext);
    contexts.map(async ({ title }) => {
      await remove(title);
    });
  } catch (e) {
    throw e;
  }
};

// Set Local Context
var setLocalContext = async (context) => {
  try{
    set("local", context);
    return context
  }catch(e){
    throw e
  }
};

// Get Local Context
var getLocalContext = async() => {
  try{
    var context= await get("local");
    return context
  }catch(e){
    throw e
  }
};


module.exports = { deleteRequest, createRequest, newContext, updateRequest, getContexts, getContext, delContext, delAllContext, setLocalContext, getLocalContext };
