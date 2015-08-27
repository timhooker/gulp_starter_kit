app.submitForm = function() {
  var form = document.getElementsByTagName('form')[0];
  var inputs = form.elements;
  var inputTotal = inputs.length;
  var postBody = app.queryObj(inputs);
  return app.sendData(postBody, function() {
    form.submit();
  });
};

app.queryObj = function(inputs) {
// takes a collection of input nodes
// and produces an object

  var switchVal = {
    'Email': 'EMAIL',
    'EMAIL': 'EMAIL',
    'First Name': 'COLUMN2',
    'Last Name': 'COLUMN4',
    'Address1': 'COLUMN7',
    'Address2': 'COLUMN8',
    'City': 'COLUMN9',
    'State': 'COLUMN10',
    'Zip Code': 'COLUMN11',
    'Phone': 'COLUMN12',
		'SUBSCRIPTION_GROUP': 'SUBSCRIPTION_GROUP'
  };

  var query = {};
  for (var i = 0; i < inputs.length; i++) {
    var iName = inputs[i].name;
    var iVal = inputs[i].value;
    console.log(iName);
    console.log(iVal);
    if (inputs[i].type != 'submit') {
      if (switchVal[iName]) {
        query[switchVal[iName]] = iVal;
      } else {
        // query[iName] = iVal;
      }
    }
  }
  return query;
};
