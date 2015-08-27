happy.zip = function(val) {
  return /\d{5}/.test(val);
};
happy.multiple = function(value) {
  // put your input id in here
  value = value.replace(',', '');
  return value !== '';
};
