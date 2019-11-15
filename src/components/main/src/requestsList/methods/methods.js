import React from 'react'
import { MethodsUl, MethodsLi } from "./css";

export default function methods({method}) {
  console.log(method)
    return (
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
    )
}
