import React, { Fragment, useState } from "react";
const storage = window.require('electron-json-storage');

export default function Ipc(props) {
  var [state, setStatte] = useState(null)
  
  var set = () => {
    storage.set('foobar', { foo: 'bar' }, function(error) {
      if (error) throw error;
    });
  }

  var get = () => {
    storage.getAll(function(error, data) {
      if (error) throw error;
      console.log(data);
    });
  }

    console.log('rendering')
    var resource = 'createResource()'
  
  return (
    <Fragment>
      <button onClick={() => {set()}}>Cl</button>
      <button onClick={() => {get()}}>Cl</button>
      <h2>  Normal || Async || Sync </h2>
      <h2>  POSTS || GETS || PUTS || DELS </h2> 
      <h2>  /users || /products || /categoriess  </h2> 
     <h2> Post Categorie OK <br/> Calling Post Product...</h2>
    </Fragment>
  );
}
