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
router.post("/", (req, res) => {
  const person = new Person({
    name: req.body.name,
    age: req.body.age,
    favoriteFoods: req.body.favoriteFoods,
  });
  person.save().then(() => {
    res.status(201).end();
  });
});
