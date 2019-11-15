import styled from '@emotion/styled'

let HeaderFieldDiv = styled.div({
    border: '1px white solid',
    height: '15vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
})

let FieldDiv = styled.div({
    border: '1px white solid',
    height: '55vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
})


let FieldUl = styled.ul({
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    overflowY: 'scroll'
})

let WrapperUl =styled.ul({
       display: 'grid',
    gridTemplateColumns: '1fr 1fr 2fr 0.3fr',
    ':hover,:focus':{
        background: '#282c34'
    },
    listStyle: 'none',
    margin: 0,
    padding: 0
})

let FieldLi = styled.li({
    padding: '10px',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    listStyle: 'none'
})

let CloseButton = styled.div({
    position: 'absolute',
    cursor: 'pointer',
    top: '2px',
    left: '2px'
})

let GhostlyDiv = styled.div({
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
    cursor: 'pointer'
})


let ModalDiv = styled.div({
    position: 'absolute',   
    top: '15vh',
    left: '20vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 30px -1px rgba(0,0,0,0.8)',
    borderRadius: '20px',
    backgroundColor: 'rgba(0,0,0,0.95)',
    color: 'white',
    width: '60vw',
    height: '70vh',
    marign: 'auto',
    zIndex: 2
})

export { ModalDiv,  GhostlyDiv, CloseButton, WrapperUl, HeaderFieldDiv, FieldDiv, FieldUl, FieldLi }