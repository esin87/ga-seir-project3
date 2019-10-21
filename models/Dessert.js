const mongoose = require('../db/connection');

const DessertSchema = new mongoose.Schema({
	title: String,
	category: String,
	description: String,
	items: Array,
	steps: Array,
	image: String
});

const Dessert = mongoose.model('Dessert', DessertSchema);

module.exports = Dessert;
