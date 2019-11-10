import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/index'

export default function App() {
    return (
        <div>
            <Index/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
