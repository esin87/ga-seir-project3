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
router.post('/', (req, res) => {
	const newDessert = req.body;
	Dessert.create(newDessert).then(created => {
		res.json(created);
	});
});

//get dessert by name
router.get('/titles/:title', (req, res) => {
	const dessertTitle = req.params.title;
	Dessert.findOne({ title: dessertTitle }).then(dessert => {
		res.json(dessert);
	});
});

//get desserts by category
router.get('/categories/:category', (req, res) => {
	Dessert.find({ category: req.params.category }).then(desserts => {
		res.json(desserts);
	});
});

//update dessert
router.put('/:id', (req, res) => {
	Dessert.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then(prevRecord => {
			res.json(prevRecord);
		})
		.catch(err => console.error(err));
});

router.delete('/:id', (req, res) => {
	Dessert.findOneAndDelete({ _id: req.params.id }).then(deleted => {
		res.json(deleted);
	});
});

//keep last
module.exports = router;
