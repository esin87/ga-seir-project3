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
router.post('/create', (req, res) => {
    Dessert.create(req.body)
        .then(dessert => {
            Dessert.find({}).then(desserts => {
                res.json(desserts);
            });
        })
        .catch(err => console.error(err));
});

//get dessert by name - 
// should use get by id in case 2 titles the same
router.get('/titles/:title', (req, res) => {
    const dessertTitle = req.params.title;
    Dessert.findOne({ title: dessertTitle }).then(dessert => {
        res.json(dessert);
    });
});



/// by id
router.get("/dessert/:id", (req, res) => {
    const dessertID = req.params.id;
    Dessert.findOne({ _id: dessertID }).then(dessert => {
        res.json(dessert);
    });
});





//get desserts by category
router.get('/categories/:category', (req, res) => {
    Dessert.find({ category: req.params.category }).then(desserts => {
        res.json(desserts);
    });
});

//update dessert - by id
router.put('/edit/:id', (req, res) => {
    Dessert.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        })
        .then(desserts => {
            Dessert.find({}).then(desserts => {
                res.json(desserts);
            });
        })
        .catch(err => console.error(err));
});



// delete by title
// should delete by id in case 2 same name

// router.delete('/titles/:title', (req, res) => {
//     Dessert.findOneAndDelete({ title: req.params.title }).then(desserts => {
//         Dessert.find({}).then(desserts => {
//             res.json(desserts);
//         });
//     });
// });


router.delete('/:id', (req, res) => {
    Dessert.findOneAndDelete({ _id: req.params.id }).then(desserts => {
        Dessert.find({}).then(desserts => {
            res.json(desserts);
        });
    });
});





//keep last
module.exports = router;