const express = require("express");
const app = express();

app.get("/mensaje", (req, res) => {
    res.status(200).send("<h1>Bienvenido a server 2</h1>");
    
})

app.use((req, res) => {
    res.status(400).send(`<p style='font-size:200px'>ERROR ${res.status(404).statusCode}</p>`);
    //console.log(res.status(404).statusMessage);
  })

app.listen(3000);