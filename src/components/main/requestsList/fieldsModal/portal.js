import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CloseButton, ModalDiv } from "./css";
import Fields from "./fields";
import { Transition, animated } from "react-spring/renderprops.cjs";
import CloseLottie from '../../../lotties/close'

function Modal(props) {
  var fields = props.fields
  var setShow = props.setShow
  return (
    <Transition native
  items={props.show}
  from={{ opacity: 0 }}
  enter={{ opacity: 1 }}
  leave={{ opacity: 0 }}>
  {show => show && (props => <animated.div style={props}>
    <ModalDiv>
      <CloseButton onClick={() => setShow(false)}>
        <CloseLottie/>
      </CloseButton>
      <Fields fields={fields}/>
    </ModalDiv>
  </animated.div>)}
</Transition>
  );
}

const modal = document.getElementById("modal1")

export default function portalCreateItem(props) {
  return ReactDOM.createPortal(
    <Modal fields={props.fields} show={props.show} setShow={props.setShow} />,
    modal
  );
}
