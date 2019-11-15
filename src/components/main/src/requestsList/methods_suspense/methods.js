import React, { Fragment, useState, Suspense } from "react";

// Loties
import LoadingLottie from "../../../../lotties/loadingLottie";
import M200Lottie from "../../../../lotties/200";

// Reducer
import { usePostRedux } from "../../../../../redux/reducer";
import { createResource } from '../../../../../redux/wrapperRequest'

// Components
import ErrorBoundary from '../../../../../redux/ErrorBoundary'
import Method from './method'


export default function Ipc(props) {

    var resource = createResource()
    var onClick = () => { 

    };

  return (    
        <Suspense fallback={<LoadingLottie/>}>
          <Method resource={resource} />
        </Suspense>
  );
}
