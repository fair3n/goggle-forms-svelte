# Google Form Svelte Clone


![Form](https://raw.githubusercontent.com/fair3n/google-forms-svelte/master/docs/images/form.png "Form")


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
Will run App and Api with a mongoDB Docker as on your computer (sudo needed for docker cmd).

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
