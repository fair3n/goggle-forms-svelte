const formulaires = [
    {
        _id: 'b1f51a511f1da0cd348b8f8598db32e61cb963e5fc69e2b41485bf99590ed75a',
        titre : 'red',
        questions : [
            {
                _id: '1',
                description : 'Quelle est la couleur ?',
                type: 'MULTIPLE_SIMPLE',
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
            },
            {
                _id: '2',
                description : 'Quand sommes nous ?',
                type: 'MULTIPLE_MULTIPLE',
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
                type: 'SIMPLE',
                choix : []
            }
        ]
    },
    {
        _id: '16477688c0e00699c6cfa4497a3612d7e83c532062b64b250fed8908128ed548',
        titre: 'blue',
        questions : []
    }
]

module.exports = formulaires;