import React, { Fragment, useState, SuspenseList } from "react";
import {MethodsDiv} from './css'
import Suspense from "./suspense";

export default function Methods({methods}) {
  var [up, setUp] = useState(false)
  return (
    <MethodsDiv>
      <button onClick={() => setUp(!up)}>MakeTest</button>
   
        {up ? methods.map(x => (
          <Suspense  method={x} key={x.id} />
        )) : null}

        
        
    </MethodsDiv>
  );
}
