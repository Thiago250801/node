const express = require('express');
const app = express();

// Habilitamos o processamento de json
app.use(express.json())

// Endpoint principal
app.get("/", function (req, res){
    res.send("Hello world");
})

// Endpoint /oi
app.get("/oi", function (req, res){
    res.send("Olá mundo!");
})


const herois = ["Mulher Maravilha", "Batman", "Homem Aranha"];

//readAll -> GET

app.get('/herois', function(req, res){
    res.send(herois);
})

//create -> POST

app.post('/herois', function (req, res){
    //console.log(req.body, typeof req.body);
    const item = req.body.nome;
    herois.push(item)
    res.send("Item criado com sucesso");
})


//Read By id -> GET /herois/:id
app.get('/herois/:id', function(req, res){
    const id = req.params.id - 1;
    const item = herois[id]

    res.send(item);
})
app.listen(3000);


