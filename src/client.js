import React from "react";
import ReactDOM from "react-dom";
import styled from '@emotion/styled'
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

      <Main />

      

      <br/><br/><br/>
    </Wrapper>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
