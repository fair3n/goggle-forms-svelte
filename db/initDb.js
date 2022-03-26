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

/*
Formulaire.findOneAndDelete({ _id: 'b1f51a511f1da0cd348b8f8598db32e61cb963e5fc69e2b41485bf99590ed75a'}).then(
    () => {
        console.log('DELETE')
    }
)
*/

Formulaire.create({
    _id: 'b1f51a511f1da0cd348b8f8598db32e61cb963e5fc69e2b41485bf995sefd75a',
    titre : 'blue',
    questions : []
}).then(
    () => console.log("Insert OK")
)