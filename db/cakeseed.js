const Dessert = require('../models/Dessert');
const cake = require('./CakeSeeds.json');

// clear the database of all cheerups insert original seeds

Dessert.deleteMany({})
	.then(() => {
		console.log('old cakes gone sir');
		return Dessert.insertMany(cake);
		// create cake files from seeds
	})
	.then(() => {
		console.log(' ㋡ cake recpz 🎂 back to originals 💕');
		process.exit();
	});
