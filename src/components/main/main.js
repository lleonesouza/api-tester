import React, {Fragment} from "react";
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Components
import TesterPanel from "./src/testerPanel/testerPanel";
import Requests from './src/requestsList/requests_suspense'


export default function main() {
  console.log('rendering')
  return (
    <Fragment>

      <TesterPanel />

      <Requests />

    </Fragment>
  );
}
