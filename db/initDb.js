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
        console.log('DELTE')
    }
)
*/

Formulaire.create({
    _id: 'b1f51a511f1da0cd348b8f8598db32e61cb963e5fc69e2b41485bf99590ed75a',
    titre : 'red',
    questions : [
        {
            _id: '1',
            description : 'Quelle est la couleur ?',
            response_type: 'MULTIPLE_SIMPLE',
            choix : [
                {
                    _id: '1.1',
                    valeur : 'Rouge'
                },
                {
                    _id: '1.2',
                    valeur : 'Vert'
                },
                {
                    _id: '1.3',
                    valeur : 'Bleu'
                }
            ]
        },{
            _id: '5',
            description : 'Il fait jour ?',
            response_type: 'MULTIPLE_SIMPLE',
            choix : [
                {
                    _id: '5.1',
                    valeur : 'Oui'
                },
                {
                    _id: '5.2',
                    valeur : 'Non'
                }
            ]
        },
        {
            _id: '2',
            description : 'Quand sommes nous ?',
            response_type: 'MULTIPLE_MULTIPLE',
            choix : [
                {
                    _id: '2.1',
                    valeur : 'Avant 2050'
                },
                {
                    _id: '2.2',
                    valeur : 'Apres 1800'
                },
                {
                    _id: '2.3',
                    valeur : 'Avant 200'
                }
            ]
        },
        {
            _id: '3',
            description : 'Qui es-tu ?',
            response_type: 'SIMPLE',
            choix : []
        }
    ]
}).then(
    () => console.log("Insert OK")
)