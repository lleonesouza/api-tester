import React, { useState, Suspense, SuspenseList } from "react";
import Method from "./method";
import ErrorBoundary from "../../../../redux/ErrorBoundary";
import { wrapPromise } from "../../../../redux/wrapPromise";
import { makeSingleTest } from "../../../../redux/actions/tests";
import LoadingLottie from "../../../lotties/loadingLottie";

export default function suspense({ method }) { 
  var test = r => makeSingleTest(r);
  var resources = { result: wrapPromise(test(method)) }

  return (
    <Suspense fallback={<h1>loading..</h1>}>
      <Method resource={resources} />
    </Suspense>
  );
}
