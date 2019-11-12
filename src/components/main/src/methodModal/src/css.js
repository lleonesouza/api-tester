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

export { WrapperUl, HeaderFieldDiv, FieldDiv, FieldUl, FieldLi }