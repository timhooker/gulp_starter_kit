app.sendData = function(data, callback) {
  var XHR = new XMLHttpRequest();
  var postUrl = 'http://labcorp.mkt7442.com/LabCorp/subscribe';
  var urlEncodedDataPairs = [];
  var urlEncodedData = "";
  var name;
  var self = this;

  // We turn the data object into an array of URL encoded key value pairs.
  for (name in data) {
    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }

  // We combine the pairs into a single string and replace all encoded spaces to
  // the plus character to match the behaviour of the web browser form submit.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');


  // We define what will happen in case of error
  XHR.addEventListener('error', function (event) {
    console.log(event);
    console.log('Oops! Something goes wrong.');
  });

  // We setup our request
  XHR.open('POST', postUrl);

  XHR.onreadystatechange = function() {
    if (XHR.readyState === 4) {
      callback();
    }
  };

  // We add the required HTTP header to handle a form data POST request
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // And finally, We send our data.
  XHR.send(urlEncodedData);
};
