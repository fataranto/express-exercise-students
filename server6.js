const express = require('express')

const app = express()
app.use(express.static('./server-6-static-files')); //para cargar hojas de estilos
app.use(express.json()); //para formatear JSON
app.use(express.urlencoded({extended: true})); //para obtner datos del formulario via POST

app.get('/formulario', (req, res) => {
    res.status(200).send(`
    <html>
    <head>
    <link rel="stylesheet" href="/estilos.css">
    </head>
    <body>
    <form class="form" method="POST" action="/">
    <label for="name" class="label-name">Name</label>
    <input type="text" id="name" name="name" maxlength="40" class="field field-name" />
  
    <label for="email" class="label-email">Email Address</label>
    <input type="email" id="email" name="email" maxlength="40" class="field field-email" />
  
    <label for="message" class="label-message">Message</label>
    <textarea id="message" name="message" cols="30" rows="5" maxlength="400" class="field field-message"></textarea>
  
    <input type="submit" value="Send Message" class="button" />
  </form>
  </body>
    </html>
  `)
})

app.post('/', function (req, res) {
  console.log(req.body.name, req.body.email, req.body.message );
  res.json(req.body);
})

app.use((req, res) => {
    res.status(404).send('Recurso no encontrado...')
  })

app.listen(3000)
  
