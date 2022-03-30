const mongoose = require('mongoose');
const yargs = require('yargs');
const { db_payload } = require('./payload');

const options = yargs
	.usage('Usage: [option] <argument> \n setup your payload in payload.js according to your needs')
	.option('db', {
		alias: 'database',
		describe: 'mongo db uri',
		type: 'string',
		demandOption: true
	})
    .option('c', {
		alias: 'create',
		describe: 'create a form inside the db',
		type: 'boolean',
	})
	.option('r', {
		alias: 'read',
		describe: 'read a form from db',
		type: 'boolean'
	})
	.option('u', {
		alias: 'update',
		describe: 'update a from in the db',
		type: 'boolean'
	})
	.option('d', {
		alias: 'delete',
		describe:
			"delete a form from db",
		type: 'boolean'
	})
	.argv;

async function initDB(db_uri) {
    //'mongodb://root:example@192.168.56.6:27017'
	try {
		await mongoose.connect(db_uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('[DB] Connected');
	} catch (error) {
		console.error(error);
		throw error;
	}
}

initDB(options.db);

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
					valeur: String
				}
			]
		}
	]
});

const Formulaire = mongoose.model('Formulaire', formulaireSchema);
if (options.create) {
    console.log("[SCRIPT] Payload : \n",JSON.stringify(db_payload));
	Formulaire.create(db_payload)
		.then(() => {
			console.log('[DB] Insert OK');
		})
		.catch((error) => {
			console.log('[DB] Insert KO \n', error);
		}).finally(() => {
            mongoose.disconnect();
		    console.log('[DB] Disconnected');
        });
} else if (options.read) {
	Formulaire.find({}, (err, found) => {
		console.log('[DB] Read OK \n', JSON.stringify(found));
	}).catch((error) => {
		console.log('[DB] Read KO \n', error);
	}).finally(() => {
        mongoose.disconnect();
        console.log('[DB] Disconnected');
    });
} else if (options.update) {
    console.log("[SCRIPT] Payload : \n",JSON.stringify(db_payload));
	Formulaire.updateOne({ _id: db_payload._id }, db_payload, { upsert: true })
		.then((result) => {
			console.log('[DB] Update OK \n', result);
		})
		.catch((error) => {
			console.log('[DB] Update KO \n', error);
		}).finally(() => {
            mongoose.disconnect();
		    console.log('[DB] Disconnected');
        });
} else if (options.delete) {
    console.log("[SCRIPT] Payload : \n",JSON.stringify(db_payload));
	Formulaire.findOneAndDelete(db_payload)
		.then(() => {
			console.log('[DB] Delete OK');
		})
		.catch((error) => {
			console.log('[DB] Delete KO \n', error);
		}).finally(() => {
            mongoose.disconnect();
		    console.log('[DB] Disconnected');
        });
}