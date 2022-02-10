const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimals} = require('../../lib/animals')
const { animals } = require('../../data/animals.json')

router.get('/animals', (req, res) => {
    let results=animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('/animals/:id', (req, res) => {
    const results=findById(req.params.id, animals);
    if (results) {
        res.json(results);
    } else{
        res.send(404);
    }
});

router.post('/animals', (req,res) => {
    //set id based on what the next index of the array will be
    req.body.id = animals.length.toString();

    //if any data in req.body is incorrect, send 400 error back
    if (!validateAnimals(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        const animal = createNewAnimal(req.body, animals);
        //sends the data back to the client
        res.json(animal);
    }
})

module.exports = router;