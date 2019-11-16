import React, { useState, useContext } from "react";
import { MethodsDiv, MethodsUl, MethodsLi } from "./methods/css";
import MethodPortal from "./fieldsModal/portal";
import { GhostlyDiv } from "./fieldsModal/css";
import { usePostRedux } from "../../../redux/reducer";
import Method from './methods/methods'

export default function Requests(props) {
  var [show, setShow] = useState(false);
  var [fields, setFields] = useState([]);
  var [methods, setMethods] = useState(usePostRedux.postsInitialState);

  var onClick = fields => {
    setShow(!show);
    setFields(fields);
  };

  return (
      <MethodsDiv>
        {show ? <GhostlyDiv onClick={() => setShow(false)} /> : null}

        {fields === [] ? null : (
          <MethodPortal show={show} setShow={setShow} fields={fields} />
        )}

        {methods.map(method => (
            <Method method={method}/>
        ))}

      </MethodsDiv>
  );
}
