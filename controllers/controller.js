const express = require('express');
const router = express.Router();

const Dessert = require('../models/Dessert');

//retrieve all the desserts
router.get('/', (req, res) => {
	Dessert.find({}).then(desserts => {
		res.json(desserts);
	});
});

//create a new dessert
router.post('/new', (req, res) => {
	const newDessert = req.body;
	Dessert.create(newDessert).then(created => {
		res.json(created);
	});
});

//get dessert by name
router.get('/:name', (req, res) => {
	const dessertName = req.params.name;
	Dessert.findOne({ name: dessertName }).then(dessert => {
		res.json(dessert);
	});
});

//update dessert
router.put('edit/:id', (req, res) => {
	Dessert.findOneAndUpdate({ _id: req.params.id }, req.body).then(
		prevRecord => {
			res.json(prevRecord);
		}
	);
});

router.delete('/:id', (req, res) => {
	Dessert.findOneAndDelete({ _id: req.params.id }).then(deleted => {
		res.json(deleted);
	});
});

//keep last
module.exports = router;
