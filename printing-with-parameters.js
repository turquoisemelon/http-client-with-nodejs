var https = require('https');

function getAndPrintHTML (options) {

  var dataArr = [];

  https.get(options, function(response) {

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


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);
