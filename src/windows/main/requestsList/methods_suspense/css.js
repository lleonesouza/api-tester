import styled from '@emotion/styled'

let MethodsDiv = styled.div({
    minHeight: '80vh',
    width: '90vw',
    margin: 'auto',
    background: 'black',
    border: '1px white solid',
    display: 'flex',
    flexDirection: 'column'
})

let MethodsUl = styled.ul({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 2fr 1fr',
    ':hover,:focus':{
        background: '#282c34'
    }
})

let MethodsLi = styled.li({
    padding: '10px',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
})

export { MethodsDiv, MethodsUl, MethodsLi }