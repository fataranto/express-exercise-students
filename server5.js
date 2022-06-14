const express = require("express");
const verPalindrome = require('palindrome-plus');
const app = express();


app.get("/check", (req, res) => {
    const checkPal = verPalindrome.isPalindrome(req.query.palabra);

    if (checkPal) {
        res.send(`<h2>"<span style='color:green'>${req.query.palabra}</span>" es un palíndromo</h2>`);
    } else {
        res.send(`<h2>"<span style='color:red'>${req.query.palabra}</span>" NO es un palíndromo</h2>`);
    }
});



app.use((req, res) => {
    res.status(400).send(`<p>para verificar un palídromo debes utilizar el siguiente formato de ruta:<br>check?palabra=tupalíndromo</p>`);
    //console.log(res.status(404).statusMessage);
})

app.listen(3000);