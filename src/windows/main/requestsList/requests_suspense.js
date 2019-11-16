import React, { Fragment, SuspenseList } from "react";
import { MethodsDiv } from "./methods_suspense/css";
import { postsInitialState } from "../../../redux/reducer";
import Method from "./methods_suspense/methods";

export default function Requests() {
  let methods = postsInitialState;

  return (
    <Fragment>
   

      <Method methods={methods} />

      
    </Fragment>
  );
}
