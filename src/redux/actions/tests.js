const { ipcRenderer } = window.require("electron");

const makeSingleTest = async (r) => {
    console.log('makeSingleTest')
    var res = await ipcRenderer.invoke("test", r)
    return res
}

export {makeSingleTest}