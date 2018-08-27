var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); 
// Running Server Details.
var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});
app.get('/form', function (req, res) {
  var html='';
  html +="<body bgcolor='pink'>";
  html+="<center>";
  html += "<form action='/thank'  method='post' name='form'>";
html+="<h1>"+"REGISTRATION FORM"+"</h1>";
  html+="<table>";
  html +="<tr>"+"<td>"+"<h2>"+"FirstName"+"</td>"+"<td> "+"<input type= 'text' name='fname' style='font-size:16pt;width:200px'>"+"</h2>"+"</td>"+"</tr>";
 html += "<tr>"+"<td>"+"<h2>"+"LastName" +"</td>"+"<td> "+"<input type= 'text' name='lname' style='font-size:16pt;width:200px'>"+"</h2>"+"</td>"+"</tr>";
  html += "<tr>"+"<td>"+"<h2>"+"Email"+"</td>"+"<td> "+"<input type= 'email' name='email' style='font-size:16pt;width:200px'>"+"</h2>"+"</td>"+"</tr>";
  html += "<tr>"+"<td>"+"<h2>"+"Age"+"</td>"+"<td>"+ "<input type= 'text' name='age' style='font-size:16pt;width:200px'>"+"</h2>"+"</td>"+"</tr>";
  html +="<tr>"+"<td>" +"<h2>"+"Mobile number" +"</td>"+"<td> "+" <input type='text' name='mobilno' style='font-size:16pt;width:200px'>"+"</h2>"+"</td>"+"</tr>";
 html+="</table>";
 html += "<br>"+"<input type='submit' value='submit'  style='font-size:16pt'>";
 html += "<input type='reset'  value='reset' style='font-size:16pt'>";
html += "</form>";
html+="</center>";
  html += "</body>";
  res.send(html);
});
app.post('/thank', urlencodedParser, function (req, res){
 var n=req.body.fname+" "+req.body.lname+" "+req.body.email+" "+req.body.age+" "+req.body.mobilno;
const crypto = require('crypto');  
var fs = require('fs');
var data =n;
const cipher = crypto.createCipher('aes192', '123');   // crypto.createCipher(algorithm, password[, options])
var encrypted = cipher.update(data, 'utf8', 'hex');  
encrypted += cipher.final('hex');  
// writeFile function with filename, content and callback function
fs.writeFile('newfile.txt', encrypted, function (err) {
  if (err) throw err;
res.send("REGISTERED SUCCESSFULLY!!!!");
}); 

console.log("ENCRYPTED SUCCUESSFULLY!!!"); 

 });