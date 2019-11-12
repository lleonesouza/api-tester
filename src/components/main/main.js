import React from "react";
import isElectron from 'is-electron';
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Components
import Ipc from "./src/ipc/ipc";
import Requests from './src/requests/requests'
import HoverIn from './src/hoverIn/hoverIn'

export default function main() {
  console.log('rendering')
  return (
    <div>
      {isElectron() ? <Ipc  myEmitter={myEmitter}/> : null}

        <HoverIn myEmitter={myEmitter}/>

 
          
        <Requests myEmitter={myEmitter}/>

    </div>
  );
}
