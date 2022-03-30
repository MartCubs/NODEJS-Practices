//Asyngchronous : EG
// ASYNCHRONOUS TASK
//filename : getData.js
fs = require('fs');
function getData(err, data) {
	console.log('data:', data);
}
data = fs.readdir('c:/', getData);
//console.log('data:', data);
console.log("This is Asynchronous");