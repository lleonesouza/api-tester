import React from "react";
import ReactDOM from "react-dom";
import styled from '@emotion/styled'
import isElectron from 'is-electron';

// Components
import Main from "./components/main/main";


let Wrapper = styled.div({
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    textAlign: 'center',
})

export default function App() {
  return (
    <Wrapper>
      <h1>Referencias da API</h1>

        {isElectron() ? <Main /> : <h1>you are not in desktop environment</h1>}   

      <br/><br/><br/>

    </Wrapper>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
