import React from 'react'
import Lottie from "react-lottie";
import * as lottieData from "../json/lottie/studying-boy.json";
import { AbsoluteDiv} from './css'


export default function lottie() {

    const Option = {
        loop: true,
        autoplay: true,
        animationData: lottieData.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return (
        <AbsoluteDiv>
          <Lottie
            options={Option}
            height={"600px"}
            width={"600px"}
            isStopped={false}
            isPaused={false}
          />
        </AbsoluteDiv>
    );
}
