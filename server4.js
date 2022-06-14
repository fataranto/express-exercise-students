const express = require("express");
const verPalindrome = require("./utils/palindrome/index")
const app = express();


app.get('/check/:pal', function (req, res) {
    const checkPal = verPalindrome.palindrome(req.params.pal);
    //res.send('El palíndromo que quieres verificar es ' + req.params.pal);
    if (checkPal) {
        res.send(`<h2>"<span style='color:green'>${req.params.pal}</span>" es un palíndromo</h2>`);
    } else {
        res.send(`<h2>"<span style='color:red'>${req.params.pal}</span>" NO es un palíndromo</h2>`);
    }
});


app.use((req, res) => {
    res.status(400).send(`<p>para verificar un palídromo debes utilizar el siguiente formato de ruta:<br>localhost:3000/check/tupalíndromo</p>`);
    //console.log(res.status(404).statusMessage);
})

app.listen(3000);