var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var dataArr = [];

  https.get(requestOptions, function(response) {

    //set encoding of received data to UTF-8
    response.setEncoding('utf-8');

    //the callback is invoked when a 'data' chunk is received
    response.on('data', function(data) {
      dataArr.push(data);
      console.log('This is data array: '+ dataArr);
    });

    //the callback is invoked when all of the data has been received
    //the end of the stream
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });

}

getAndPrintHTML();
