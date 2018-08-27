const crypto = require('crypto');  
var fs = require('fs');

var data = fs.readFileSync('newfile.txt'); 
data=data.toString();
const decipher = crypto.createDecipher('aes192', '123');  
var decrypted = decipher.update(data, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
var arr=decrypted.split(" ");
console.log("FirstName : "+arr[0]); 
console.log("LastName :"+arr[1]); 
console.log("Email : "+arr[2]);  
console.log("Age :"+arr[3]); 
console.log("MobileNumber :"+arr[4]); 
