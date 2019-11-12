import styled from '@emotion/styled'


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


export {ModalDiv,  GhostlyDiv, CloseButton}