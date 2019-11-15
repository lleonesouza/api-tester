const fs = require("fs");
const os = require("os");
const path = require("path");
const axios = require("axios");
var http = require('http');
// var progress = require("progress-stream");
var request = require('request');

var DockerUrl = () => {
  switch (os.type()) {
    case "window":
      return (url =
        "https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe");
    case "linux":
      return (url =
        "https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe");
    case "mac":
      return (url =
        "https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe");
    default:
      break;
  }
};

var dir = () => {
  switch (os.type()) {
    case "Linux":
      return path.resolve(__dirname, "docker", "docker.exe");
    default:
      break;
  }
};


let testUrl = 'http://cachefly.cachefly.net/10mb.test'

var downloadDocker = () => {
  if (fs.existsSync('docker')) {
    console.log('The file exists.')
  }else{
    fs.mkdirSync("docker")
  }

  let url = testUrl;
  let dest = dir();
  let wStream = fs.createWriteStream(dest);
  let res = axios({
    method: "GET",
    url: url,
    responseType: "stream"
  });
  
  res.data.pipe(wStream);

  let promise = new Promise((resolve, reject) => {
    res.data.on("end", () => {
      resolve();
      console.log("end");
    });

    res.data.on("error", err => {
      if (fs.exists(dest)) fs.unlink(dest);
      reject(err);
      console.log("error");
    });
  });

  return promise;
};


var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};


function getInstallerFile (installerfileURL) {

  // Variable to save downloading progress
  var received_bytes = 0;
  var total_bytes = 0;

  var outStream = fs.createWriteStream(INSTALLER_FILE);

  request
      .get(installerfileURL)
          .on('error', function(err) {
              console.log(err);
          })
          .on('response', function(data) {
              total_bytes = parseInt(data.headers['content-length']);
          })
          .on('data', function(chunk) {
              received_bytes += chunk.length;
              showDownloadingProgress(received_bytes, total_bytes);
          })
          .pipe(outStream);
};

function showDownloadingProgress(received, total) {
  var percentage = ((received * 100) / total).toFixed(2);
  process.stdout.write((platform == 'win32') ? "\033[0G": "\r");
  process.stdout.write(percentage + "% | " + received + " bytes downloaded out of " + total + " bytes.");
}



function downloadFile(file_url , targetPath){
  // Save variable to know progress
  var received_bytes = 0;
  var total_bytes = 0;

  var req = request({
      method: 'GET',
      uri: file_url
  });

  var out = fs.createWriteStream(targetPath);
  req.pipe(out);

  req.on('response', function ( data ) {
      // Change the total bytes value to get progress later.
      total_bytes = parseInt(data.headers['content-length' ]);
  });

  req.on('data', function(chunk) {
      // Update the received bytes
      received_bytes += chunk.length;

      showProgress(received_bytes, total_bytes);
  });

  req.on('end', function() {
      alert("File succesfully downloaded");
  });
}

function showProgress(received,total){
  var percentage = (received * 100) / total;
  console.log(percentage + "% | " + received + " bytes out of " + total + " bytes.");
  // 50% | 50000 bytes received out of 100000 bytes.
}



module.exports = {downloadDocker, download, getInstallerFile, downloadFile} ;
