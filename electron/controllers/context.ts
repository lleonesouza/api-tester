const storage = require('electron-json-storage');

var contextModal = {
    title: '',
    
}

var newContext = () => {
  storage.set("foobar", { foo: "bar" }, function(error) {
    if (error) throw error;
  });
};

var getContexts = () => {
    storage.set("foobar", { foo: "bar" }, function(error) {
      if (error) throw error;
    });
  };

var getContext = (context_id) => {
  storage.set("foobar", { foo: "bar" }, function(error) {
    if (error) throw error;
  });
};

var delContext = (context_id) => {
  storage.set("foobar", { foo: "bar" }, function(error) {
    if (error) throw error;
  });
};


var newRequest = (context_id) => {
  storage.getAll(function(error, data) {
    if (error) throw error;
    console.log(data);
  });
};

var updateRequest = (context_id, request_id) => {
    storage.getAll(function(error, data) {
      if (error) throw error;
      console.log(data);
    });
  };

var DelRequest = (context_id, request_id) => {
    storage.getAll(function(error, data) {
      if (error) throw error;
      console.log(data);
    });
  };


  



module.exports = {};