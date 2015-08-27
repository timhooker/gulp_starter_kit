app.timeStamp = function() {
  var timeField = document.getElementById('control_COLUMN8'),
      timeContainer = document.getElementById('container_COLUMN8'),
      timeStamp = new Date();
    	timeField.value = timeStamp.toLocaleString();
      timeField.style.display = 'none';
};
