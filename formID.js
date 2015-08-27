// Quick script to generate form names
// (function() {
//   var inputs = document.getElementsByTagName('input');
//   var names = '';
//   var showMe = document.querySelector('.show-names');
//   for (var i = 0; i < inputs.length; i++) {
//     if (inputs[i].type != 'hidden' && inputs[i].type != 'submit') {
//       var name = inputs[i].name;
//       name = name.toLowerCase().replace(/\s+/g, '_');
//       names += name + ',';
//     }
//   }
//   var res = document.createElement("p");
//   res.textContent = names;
//   showMe.appendChild(res);
// })();
