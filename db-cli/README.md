# Database Manipulation CLI

## Install

```
npm i
```

## Usage 

```bash
$ node initDb.js
Usage: [option] <argument>
 setup your payload in payload.js according to your needs

Options:
  --help            Affiche de l'aide                                  [booléen]
  --version         Affiche le numéro de version                       [booléen]
  --db, --database  mongo db uri                  [chaine de caractère] [requis]
  -c, --create      create a form inside the db                        [booléen]
  -r, --read        read a form from db                                [booléen]
  -u, --update      update a from in the db                            [booléen]
  -d, --delete      delete a form from db                              [booléen]

Argument requis manquant: db
```

#### Creation `-c, --create `

> you need to setup the `payload.js` file with your form, example in `./example/payload-creation.example.js`

```bash
$ node initDb.js --db 'mongodb://root:example@192.168.56.6:27017' -c
```

Add a new form in the database

#### Read `-r, --read `


```bash
$ node initDb.js --db 'mongodb://root:example@192.168.56.6:27017' -r
```

List all forms.

#### Update `-u, --update `

> you need to setup the `payload.js` file with your form, example in `./example/payload-update.example.js`

```bash
$ node initDb.js --db 'mongodb://root:example@192.168.56.6:27017' -u
```

Update an existing form in the database

#### Delete `-d, --delete `

> you need to setup the `payload.js` file with your form, example in `./example/payload-delete.example.js`

```bash
$ node initDb.js --db 'mongodb://root:example@192.168.56.6:27017' -d
```

Delete an existing form in the database