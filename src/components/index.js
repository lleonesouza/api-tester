import React, {useContext, useState} from 'react'
import { Transition, animated } from "react-spring/renderprops";
import { useImmerReducer } from "use-immer";
import { Reducer, initialState, ReducerContext} from '../reducer/reducer'
import Lottie from './lottie'

export default function index() {
  const [state, dispatch] = useImmerReducer(Reducer, initialState);
    var [show, setShow ] = useState(false)
    const context = useContext(ReducerContext)
    console.log(context)

  return (
    <ReducerContext.Provider value={state}>

      <h1 onMouseOver={() => setShow(!show)}> Hover Springs</h1>

      <Transition
        native
        items={show}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
            <animated.div style={props}>

                {context}

            

            </animated.div>
          ))
        }
      </Transition>

      <Lottie />


    </ReducerContext.Provider>
  );
}
