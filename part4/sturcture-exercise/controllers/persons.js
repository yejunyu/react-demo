const router = require("express").Router();
const Person = require("../models/person");

router.get("/", (req, res) => {
    Person.find({}).then((persons) => {
        res.json(persons);
    });
});

router.get("/:id", (req, res, next) => {
    Person.findById(req.params.id)
        .then((person) => {
            if (person) {
                res.json(person);
            } else {
                res.status(400).end();
            }
        })
        .catch((error) => next(error));
});

router.post("/", (req, res, next) => {
    const body = req.body;
    const person = new Person({
        name: body.name,
        phone: body.phone,
    });
    person
        .save()
        .then((savePerson) => {
            res.json(savePerson);
        })
        .catch((error) => next(error));
});

router.put("/:id", (req, res, next) => {
    const body = req.body;
    const person = new Person({
        name: body.name,
        phone: body.phone,
    });
    Person.findByIdAndUpdate(req.params.id, person, {new: true})
        .then((updatePerson) => {
            res.json(updatePerson);
        })
        .catch((error) => next(error));
});

router.delete("/:id", (req, res, next) => {
    Person.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).end();
        }).catch(error => next(error))
});

module.exports = router