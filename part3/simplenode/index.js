const Person = require("./mongo");

const express = require("express");
// 日志
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  // 把信息传递给下一个中间件
  next();
};

app.use(requestLogger);
morgan.token("body", (request) => JSON.stringify(request.body));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (req, res) => {
  Person.find({}).then((data) => {
    res.json(data);
  });
});
app.get("/info", (req, res) => {
  Person.find({}).then((data) => {
    res.send(`<h4>Phonebook has info for ${data.length} people</h4>
  <div>${new Date()}</div>
  `);
  });
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  Person.findById(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send({ error: "Could not find person" });
    });
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (body.name === undefined) {
    return res.status(400).json({ error: "name missing" });
  }
  const person = new Person({
    name: body.name,
    phone: body.phone,
  });
  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  Person.deleteOne({ _id: id }).then((result) => {
    res.json(result);
    res.status(204).end();
  });
});

const unknownEndpoint = (request, response, next) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
