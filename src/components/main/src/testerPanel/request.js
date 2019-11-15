import React from 'react'

export default function request({resource}) {
    const request = resource.startCompleteTest.read()
    console.log(request)
    return (    
        <div>
           <h1>{request[0].title}</h1>
        </div>
    )
}
