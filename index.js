const express = require('express');
const app = express();

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
    res.send("Criar registro");
})

app.listen(3000);


