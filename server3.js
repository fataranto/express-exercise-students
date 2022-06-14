const express = require("express");

const path = require('path')
console.log(__dirname);
console.log(__filename);


const app = express();

app.get("/nacktschnecke", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'server3-files/nacktschnecke.html'));    
})

app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'server3-files/about.html'));    
})

app.use((req, res) => {
    res.status(400).send(`<p style='font-size:200px'>ERROR ${res.status(404).statusCode}</p>`);
    //console.log(res.status(404).statusMessage);
  })

app.listen(3000);