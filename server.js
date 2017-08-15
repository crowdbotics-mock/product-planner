const express = require("express");
const app = express();

var path = require("path");
app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname,'dist')));

app.use('/',express.static("dist"));
app.listen(process.env.PORT || 3000);
console.log("working 3000");