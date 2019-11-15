const { ipcRenderer } = window.require("electron");

const makePostTest = (r) => {
    ipcRenderer.invoke("test:post", r).then((res) => {return res})
}

const makeGetTest = (r) => {
    ipcRenderer.invoke("test:get", r).then((res) => {return res})
}

const makePutTest = (r) => {
    ipcRenderer.invoke("test:put", r).then((res) => {return res})
}

const makeDeleteTest = (r) => {
    ipcRenderer.invoke("test:delete", r).then((res) => {return res})
}

const makeClearTest = (r) => {
    ipcRenderer.invoke("test:clear", r).then((res) => {return res})
}


