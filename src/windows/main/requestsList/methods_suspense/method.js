import React, { useState, Fragment } from "react";
import  PortalFields  from "../fieldsModal/portal";
import { MethodsUl, MethodsLi } from "./css";
import { GhostlyDiv } from '../fieldsModal/css'

export default function method({ resource }) {
  var method = resource.result.read();
  let [show, setShow] = useState(false);
  return (
    <Fragment>
      {show ? <GhostlyDiv onClick={() => setShow(false)} /> : null}

      {method.fields === "itemFields" ? null : (
        <PortalFields show={show} setShow={setShow} fields={method.fields} />
      )}

      <MethodsUl onClick={() => setShow(!show)}>
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
    </Fragment>
  );
}
