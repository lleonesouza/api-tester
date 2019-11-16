import React, { Fragment, useContext } from "react";
import { FieldDiv, FieldUl, FieldLi, HeaderFieldDiv, WrapperUl } from "./css";

export default function Fields(props) {
  var fields = props.fields;

  return (
    <Fragment>
      <HeaderFieldDiv>
        <h1>/\</h1>

        <h1 >Status: <span style={{color:'green'}}>200</span>  </h1> 
        
        <h1>\/</h1>
      </HeaderFieldDiv>

      <FieldDiv>
        <FieldUl>
          {fields.map(field => (
            <WrapperUl>
              <FieldLi> {field.title}</FieldLi>
              <FieldLi> {field.type}</FieldLi>
              <FieldLi> {field.description}</FieldLi>
              <FieldLi> {field.required ? "*" : ""}</FieldLi>
            </WrapperUl>
          ))}
        </FieldUl>
      </FieldDiv>
    </Fragment>
  );
}
