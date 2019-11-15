import React, { useState, SuspenseList } from "react";
import { MethodsDiv } from "./methods/css";
import MethodPortal from "./fieldsModal/portal";
import { GhostlyDiv } from "./fieldsModal/css";
import { usePostRedux } from "../../../../redux/reducer";
import Method from './methods_suspense/methods'

export default function Requests(props) {
    
  let [show, setShow] = useState(false);
  let [fields, setFields] = useState([]);


  let methods = usePostRedux.postsInitialState

  console.log(methods)

  var onClick = fields => {
    setShow(!show);
    setFields(fields);
  };

  return (
    <MethodsDiv>
      {show ? <GhostlyDiv onClick={() => setShow(false)} /> : null}

      {fields === [] ? null : (
        <MethodPortal onClick={onClick} show={show} setShow={setShow} fields={fields} />
      )}

      <SuspenseList>
        {methods.map(method => {
          <Method method={method} />;
        })}
      </SuspenseList>

    </MethodsDiv>
  );
}
