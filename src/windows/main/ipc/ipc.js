import React, { useState, Suspense, SuspenseList } from "react";
const { ipcRenderer } = window.require("electron");
import LoadingLottie from "../../../Lotties/loadingLottie";
import M200Lottie from "../../../Lotties/200";
import { usePostRedux } from "../../../../redux/reducer";
import {createResource} from './wrapperRequest'
import ErrorBoundary from '../ErrorBoundary'
import Request from './request'
const resource = createResource()

export default function Ipc(props) {

  var onClick = () => {

  };

  return (
    <div>
      <button onClick={() => onClick()}>Refresh data</button>


      <SuspenseList revealOrder="forwards">

        <Suspense fallback={<h1>loading...</h1>}>
          <Request resource={resource} />
        </Suspense>

        <Suspense fallback={<h1>loading...</h1>}>
          <Request resource={resource} />
        </Suspense>

      </SuspenseList>
      <LoadingLottie />
      <M200Lottie />
    </div>
  );
}
