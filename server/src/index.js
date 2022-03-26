const express = require('express');
const app = express();
const cors = require('cors');
const resultats = [];

const mongoose = require("mongoose");

async function initDB() {
    try {
        await mongoose.connect(
            "mongodb://root:example@192.168.56.6:27017",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log('Connected');
    } catch (error) {
        console.error(error);
        throw error;
    }
}

initDB();

const formulaireSchema = new mongoose.Schema({
    _id: String,
    titre: String,
    questions: [
        {
            _id: String,
            description: String,
            response_type: String,
            choix: [
                {
                    _id: String,
                    valeur: String,
                }
            ]
        }
    ]
});

const Formulaire = mongoose.model('Formulaire', formulaireSchema);

app.use(cors({
    //TODO: A changer
    origin: '*'
}))

app.use(express.json());

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});

app.post('/api/resultats/:formId',(req, res) => {
    console.log("POST - Resultats ",req.body);
    res.status(201).json(req.body);
})

 app.get('/api/formulaires', (req, res) => {
     Formulaire.find({}, (err, found) => {
         res.json(found);
     })
 })

app.get('/api/formulaires/:id', (req, res) => {
    const id = req.params.id;
    console.log("GET - Formulaire : ",id);
    Formulaire.findOne({ _id: id}).then(
        (result) => {
            res.status(200).json(result);
        }
    ).catch(
        (error) => {
            res.status(500).json({error : error});
        }
    )
})