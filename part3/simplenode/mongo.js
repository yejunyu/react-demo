require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;
console.log(url);

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("error connecting to mongodb", err.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 5,
    required: true,
  },
  phone: {
    type: String,
    minLength: 11,
    required: true,
  },
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// test
// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "yejunyu",
//   phone: "1234567890",
// });

// person.save().then((result) => {
//   console.log("person saved!");
//   mongoose.connection.close();
// });

// export default Person;
module.exports = mongoose.model("Person", personSchema);
