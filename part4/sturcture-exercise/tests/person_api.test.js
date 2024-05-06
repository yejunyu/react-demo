const { test, after } = require("node:test");
const assert = require("node:assert");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("notes are returned as json", async () => {
  await api
    .get("/api/persons")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("there are 4 persons", async () => {
  const response = await api.get("/api/persons");
  assert.strictEqual(response.body.length, 4);
});

test("the first note is about HTTP methods", async () => {
  const response = await api.get("/api/persons");

  const contents = response.body.map((e) => e.phone);
  assert.strictEqual(contents.includes("HTML is easy"), true);
});

after(async () => {
  await mongoose.connection.close();
});
