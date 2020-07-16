//ispolzuyem bibliateku express
const express = require('express');
//sozdaem object express
const app = express();
// govorim , chto my razdelaem papku public
app.use(express.static('public'));
//govorim , chto zapuskaem na portu 80
app.listen(80);

console.log("Server started at 80");