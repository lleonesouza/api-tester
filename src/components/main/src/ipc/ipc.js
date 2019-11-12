import React, { useState, useReducer, useEffect } from "react";
const { ipcRenderer } = window.require("electron");
import LoadingLottie from "../../../Lotties/loadingLottie";
import M200Lottie from "../../../Lotties/200";
import { usePostRedux } from "../../../../redux/reducer";

export default function Ipc(props) {
  var initialState = usePostRedux.postsInitialState;

  const [postState, dispatchPost] = useReducer(
    usePostRedux.postReducer,
    usePostRedux.postsInitialState
  );

  const [getState, dispatchGet] = useReducer(
    usePostRedux.postReducer,
    usePostRedux.postsInitialState
  );

  const [putState, dispatchPut] = useReducer(
    usePostRedux.postReducer,
    usePostRedux.postsInitialState
  );

  const [delState, dispatchDel] = useReducer(
    usePostRedux.postReducer,
    usePostRedux.postsInitialState
  );

  var dispatchs = { dispatchPost, dispatchGet, dispatchPut, dispatchDel };
  var context =  [...postState] ;

  ipcRenderer.on("dispatch", (e, r) => {
    dispatchs.dispatchPost({type: r.title, data: r})
    props.myEmitter.emit("request", postState);
    console.log('post', postState)
  })


  ipcRenderer.on("completeRequest", (e, r) => {
    // dispatchs.dispatchPost({type: r.prevR.title, data: r.prevR})
    props.myEmitter.emit("completeRequest", r);
    // props.myEmitter.emit("request", postState);
    console.log("completed");
  });

 

  var onClick = () => {
    ipcRenderer.send("test:posts", initialState);
  };

  return (
    <div>
      <button onClick={() => onClick()}>Start tests</button>

      <LoadingLottie />
      <M200Lottie />
    </div>
  );
}
