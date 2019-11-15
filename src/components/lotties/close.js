import Lottie from 'react-lottie'
import * as animationData from './json/close.json'
import React from 'react'
import styled from '@emotion/styled'

export default function close() {
    let Wrapper = styled.div({
        height: '10vh',
        width: '10vw',
        margin: 'auto',
    })

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    return (
        <Wrapper>
             <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}/>
        </Wrapper>
    )
}
