import React, { Fragment, useState, Suspense, SuspenseList } from "react";

// Loties
import LoadingLottie from "../../../lotties/loadingLottie";
import M200Lottie from "../../../lotties/200";

// Reducer
import { usePostRedux } from "../../../../redux/reducer";
import { createResource } from '../../../../redux/wrapperRequest'

// Components
import ErrorBoundary from '../../../../redux/ErrorBoundary'


export default function Ipc(props) {

    console.log('rendering')

    var resource = createResource()
    var onClick = () => { 

    };

  return (
    <Fragment>
     
     <h4> Post Categorie OK <br/> Calling Post Product...</h4>

    </Fragment>
  );
}
