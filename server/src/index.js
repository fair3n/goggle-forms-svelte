const express = require('express');
const app = express();
const formulaires = require('./mock/data.js');
const cors = require('cors');
const resultats = [];

app.use(cors({
    origin: '*'
}))

app.use(express.json());

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});

app.post('/api/formulaires',(req, res) => {
    const newformulaire = {
        id: formulaires.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    formulaires.push(newformulaire);
    res.status(201).json(newformulaire);
})



app.post('/api/resultats/:formId',(req, res) => {
    console.log("POST - Resultats ",req.body);
    res.status(201).json(req.body);
})

app.get('/api/formulaires', (req, res) => {
    res.json(formulaires);
})


app.get('/api/formulaires/:id', (req, res) => {
    const id = req.params.id;
    console.log("GET - Formulaire : ",id);
    const formulaire = formulaires.find( p => p._id === id);
    if(!formulaire){
        res.status(404).json('formulaire not found');
    }
    res.json(formulaire);
})