# Google Form Svelte Clone


![](https://raw.githubusercontent.com/fair3n/goggle-forms-svelte/develop/docs/images/form.png)


## Installation

```
npm install
cd server
npm install
```

## Start

> / ! \ You will need to create three files `.env`,`.env.dev`,`.env.prod`

> When running in development mode, `.env` will be erased by `.env.dev`

> When running in production mode, `.env` will be erased by `.env.prod`
### App

```
npm run dev -- --open --host
```
> Application will be running on localhost:3000


### Server
> / ! \ You need to setup a mongoserver localy or have a remote one.
> 
> Provide your mongo uri with the environment variable MONGODB_URI
```
cd server
node src/index.js
```



> Server will be runngin on localhost:5000

## Docker Compose
Will run App and Api with a mongoDB Docker on your computer (sudo needed for docker cmd).

In `docker-compose.yml`, change the line 20 according to you IP.
```
MONGODB_URI="mongodb://root:example@192.168.56.6:27017"
```

In `.env.prod`, idem.
```
VITE_API_URL=http://192.168.56.6:5000
```

Start the docker compose :

```
npm run compose
```

> Application prod builded running on port 80 

> Server on port 5000

## Usage

#### Define your Form object and add it to the database

```
cd db
```

Edit `initDb.js` to define your form :
```
...
 "mongodb://root:example@192.168.56.6:27017",
...
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
```
> Use a hash for the form `_id` value as the app only render path ending with /#{_id}, ensuring unique form path for each user.

> Results are store on mongoDB, you can access them with `{api_url}/api/resultats` : 
  
 ```json
  [
  {
    "_id": "b1f51a511f1da0cd348b8f8598db32e61cb963e5fc69e2b41485bf99590ed75a",
    "titre": "red",
    "questions": [
      {
        "_id": "1",
        "description": "Quelle est la couleur ?",
        "choix": [
          {
            "_id": "1.1",
            "valeur": "Rouge"
          },
          {
            "_id": "1.2",
            "valeur": "Vert"
          },
          {
            "_id": "1.3",
            "valeur": "Bleu"
          }
        ],
        "reponse": "Vert"
      },
      {
        "_id": "5",
        "description": "Il fait jour ?",
        "choix": [
          {
            "_id": "5.1",
            "valeur": "Oui"
          },
          {
            "_id": "5.2",
            "valeur": "Non"
          }
        ],
        "reponse": "Non"
      },
      {
        "_id": "2",
        "description": "Quand sommes nous ?",
        "choix": [
          {
            "_id": "2.1",
            "valeur": "Avant 2050"
          },
          {
            "_id": "2.2",
            "valeur": "Apres 1800"
          },
          {
            "_id": "2.3",
            "valeur": "Avant 200"
          }
        ],
        "reponse": [
          "Apres 1800"
        ]
      },
      {
        "_id": "3",
        "description": "Qui es-tu ?",
        "choix": [],
        "reponse": "Qui es-tu ?"
      }
    ],
    "__v": 0
  }
]
```
  
## Supported Inputs 

#### SIMPLE
![](https://raw.githubusercontent.com/fair3n/goggle-forms-svelte/develop/docs/images/SIMPLE.png)

#### MULTIPLE SIMPLE

![](https://raw.githubusercontent.com/fair3n/goggle-forms-svelte/develop/docs/images/MULTIPLE_SIMPLE.png)


#### MULTIPLE MULTIPLE
![](https://raw.githubusercontent.com/fair3n/goggle-forms-svelte/develop/docs/images/MULTIPLE_MULTIPLE.png)

