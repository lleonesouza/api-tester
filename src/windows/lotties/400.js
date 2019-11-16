import Lottie from 'react-lottie'
import * as animationData from './json/start-button.json'

import React from 'react'

export default function errorLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    return (
        <div>
        
             <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}/>


        </div>
    )
}
