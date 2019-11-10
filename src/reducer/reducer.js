import { createContext } from "react"
import actions from './actions'


const initialState = 'InitialState From Context with useReducer'

var Reducer = (draft, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...draft, buffer: [...draft.buffer, action.buffer] };
    case "GET_USER":
      return { ...draft, ...action.item };
    case "PUT_USER":
      return { ...draft, ...action.item };
    case "DEL_USER":
      return { ...draft, ...action.item };
      case "RESET":
      return { initialState };
    case "LOADING":
      return { ...draft, loading: false };
    default:
      return { ...draft };
  }
}

const ReducerContext = createContext(initialState)


export { Reducer, initialState, ReducerContext };
