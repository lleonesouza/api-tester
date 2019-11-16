const { ipcRenderer } = window.require("electron");

const makeTest = async (r) => {
    var result = ipcRenderer.invoke("startRequest", r)
    return result
}

const makePostTest = async (r) => {
    var result = ipcRenderer.invoke("startPost", r)
    return result
}

const makeGetTest = async (r) => {
    var result = ipcRenderer.invoke("startGet", r)
    return result
}

const makePutTest = async (r) => {
    var result = ipcRenderer.invoke("startPut", r)
    return result
}

const makeDelTest = async (r) => {
    var result = ipcRenderer.invoke("startDel", r)
    return result
}


export { makeTest }