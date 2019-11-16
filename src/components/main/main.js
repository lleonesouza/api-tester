import React, {Fragment} from "react";
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Components
import TesterPanel from "./testerPanel/testerPanel";
import Requests from './requestsList/requests_suspense'


export default function main() {
  return (
    <Fragment>

      <TesterPanel />

      <Requests />

    </Fragment>
  );
}
