const {usePostRedux} = require('../../../../redux/reducer')
const {makeTest} = require('./invokers')

const wrapPromise = (promise) => {
    let status = 'pending';
    let result = '';
    let suspender = promise.then(r => {
        status = 'success'
        result = r
    }, e => {
        status = 'error'
        result = e
    })

    return {
        read(){
            if(status === 'pending'){
                throw suspender
            } else if (status === 'error'){
                throw result
            }
            return result
        }
    }
}

let r = usePostRedux.postsInitialState

export const createResource = () => {
    return {
        startCompleteTest: wrapPromise( makeTest(r) )
    }
}