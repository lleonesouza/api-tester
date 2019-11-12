import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CloseButton, ModalDiv } from "./css";
import Fields from "./src/fields";
import Lottie from "react-lottie";
import { Transition, animated } from "react-spring/renderprops.cjs";

import * as closeDrawerData from "./lottie/closeModal.json";

function Modal(props) {
  const closeDrawerOption = {
    loop: false,
    autoplay: true,
    animationData: closeDrawerData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
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
        <Lottie
          options={closeDrawerOption}
          height={"70px"}
          width={"70px"}
          isStopped={false}
          isPaused={false}
        />
      </CloseButton>
      <Fields fields={fields}/>
    </ModalDiv>
  </animated.div>)}
</Transition>
  );
}

const modal = document.getElementById("modal1");

export default function portalCreateItem(props) {
  return ReactDOM.createPortal(
    <Modal fields={props.fields} show={props.show} setShow={props.setShow} />,
    modal
  );
}
