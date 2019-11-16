import React, { Fragment, useState, Suspense, SuspenseList } from "react";

// Loties
import LoadingLottie from "../../lotties/loadingLottie";
import M200Lottie from "../../lotties/200";

// Reducer
import { usePostRedux } from "../../../redux/reducer";
import { wrapPromise } from '../../../redux/wrapPromise'

// Components
import ErrorBoundary from '../../../redux/ErrorBoundary'


export default function Ipc(props) {
  var [state, setStatte] = useState(null)


    console.log('rendering')
    var resource = 'createResource()'
  
  return (
    <Fragment>
      <h2>  Normal || Async || Sync </h2>
      <h2>  POSTS || GETS || PUTS || DELS </h2> 
     <h2> Post Categorie OK <br/> Calling Post Product...</h2>
    </Fragment>
  );
}
