var cmd     = require('node-command-line'),
    Promise = require('bluebird');



    function runSingleCommandWithoutWait() {
      var res = cmd.run('docker --version');
      if(res.success){
          
      }else throw 'error'
      console.log('Executed your command :)');
    }

    function runSingleCommandWithWait() {
      Promise.coroutine(function *() {
        yield cmd.run('node --version');
        console.log('Executed your command :)');
      })();
    }


    function runMultipleCommandWithoutWait() {
      Promise.coroutine(function *() {
        var commands = ["node --version","npm --version"];
        for(var i=0; i < commands.length; i++) {
          cmd.run(commands[i]);
        }
        console.log('Executed your command :)');
      })();
    }
