# Google Form Svelte Clone


![](https://raw.githubusercontent.com/fair3n/goggle-forms-svelte/develop/docs/images/form.png)


## Installation


#### Application
```bash
npm install
```

#### Server

```bash
cd server
npm install

```

#### Database helper CLI
```bash
cd db-cli
npm install
```

## Start

> / ! \ You will need to create three files `.env`,`.env.dev`,`.env.prod`

> When running in development mode, `.env` will be erased by `.env.dev`

> When running in production mode, `.env` will be erased by `.env.prod`


### App

```bash
npm run dev -- --open --host
```
> Application will be running on localhost:3000


### Server

> / ! \ You need to setup a mongoserver localy or have a remote one.
> 
> Provide your mongo uri with the environment variable MONGODB_URI


```bash
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

Same in `.env.prod`.
```
VITE_API_URL=http://192.168.56.6:5000
```

Start the docker compose :

```bash
npm run compose
```

> Application prod builded running on port 80 

> Server on port 5000


## Usage

Each form stored in the database will be expose through a unique url based on his `_id`.

User acessing the correct url can answer the form, if the url isn't a valid form one, a 404 page is displayed.

The database store only the last submission for each form.

To define your form and inser them in the database, please refer to the `db-cli` README.
  
## Supported Inputs 

#### SIMPLE
![](https://raw.githubusercontent.com/fair3n/goggle-forms-svelte/develop/docs/images/SIMPLE.png)

```
{
    _id: '3',
    description : 'Qui es-tu ?',
    response_type: 'SIMPLE',
    choix : []
}
```

#### MULTIPLE SIMPLE

![](https://raw.githubusercontent.com/fair3n/goggle-forms-svelte/develop/docs/images/MULTIPLE_SIMPLE.png)

```
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
}
```


#### MULTIPLE MULTIPLE
![](https://raw.githubusercontent.com/fair3n/goggle-forms-svelte/develop/docs/images/MULTIPLE_MULTIPLE.png)

```
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
}
```
