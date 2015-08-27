app.formCount = function(elementId) {
  var msgBody = document.getElementById(elementId),
      remain = document.getElementById('charremain');
  function updateInt() {
    var length = 750 - msgBody.value.length;
    charremain.innerHTML = length;
  }
  updateInt();
  msgBody.addEventListener('input', updateInt);
};
