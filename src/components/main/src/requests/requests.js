import React, { useState, useContext } from "react";
import { MethodsDiv, MethodsUl, MethodsLi } from "./css";
import MethodModal from "../methodModal/modal";
import { GhostlyDiv } from "../methodModal/css";
import { usePostRedux } from "../../../../redux/reducer";

export default function Requests(props) {
  var [show, setShow] = useState(false);
  var [fields, setFields] = useState([]);
  var [my, setMy] = useState(usePostRedux.postsInitialState);

  var context = useContext(usePostRedux.PostContext);

  props.myEmitter.once("request", (postState) => {
    setMy(postState)
  });

  console.log(context)

  var states = [...context];

  console.log(my);

  var onClick = fields => {
    setShow(!show);
    setFields(fields);
  };

  return (
    <usePostRedux.PostContext.Provider value={my}>
      <MethodsDiv>
        {show ? <GhostlyDiv onClick={() => setShow(false)} /> : null}

        {fields === [] ? null : (
          <MethodModal show={show} setShow={setShow} fields={fields} />
        )}

        {my.map(method => (
          <MethodsUl onClick={() => onClick(method.fields)}>
            <MethodsLi> {method.title} </MethodsLi>
            <MethodsLi>
              {method.status === 401 ? (
                <h3 style={{ color: "red" }}>{method.status}</h3>
              ) : method.status === null ? (
                <h3 style={{ color: "yellow" }}>waiting</h3>
              ) : method.status === 200 ? (
                <h3 style={{ color: "green" }}>{method.status}</h3>
              ) : (
                <h3 style={{ color: "green" }}>none</h3>
              )}
            </MethodsLi>
            <MethodsLi> {method.type} </MethodsLi>
            <MethodsLi> {method.description} </MethodsLi>
            <MethodsLi> {method.url} </MethodsLi>
          </MethodsUl>
        ))}
      </MethodsDiv>
    </usePostRedux.PostContext.Provider>
  );
}
