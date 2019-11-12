import React, { useState } from "react";

export default function hoverIn(props) {
  var [my, setMy] = useState(null);

  props.myEmitter.once("completeRequest", (r) => {
    setMy(r);
  });


  
  console.log('my', my);

  return (
    <div>
      <h1> {my === null ? null : my.prevR.title} HoverIn, </h1>
    </div>
  );
}
