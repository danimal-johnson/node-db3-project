const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
}

function find() {
  // SELECT * FROM schemes
  return db("schemes");
}

function findById(id) {
  // SELECT * FROM schemes where id = id
  return db("schemes")
    .where({ id: id })
    .first();
    // TODO: Resolve failures to null?
}

function findSteps(schemeId) {
  // SELECT s.id, c.scheme_name,
  //   s.step_number, s.instructions
  // FROM steps as s
  // JOIN schemes as c
  // ON c.id = s.scheme_id
  // WHERE s.scheme_id = schemeId
  // ORDER BY s.step_number;
  return db("steps as s")
    .join("schemes as c", "c.id", "s.scheme_id")
    .where({ scheme_id: schemeId})
    .select("s.id", "c.scheme_name",
      "s.step_number", "s.instructions")
    .orderBy("s.step_number");
}

function add() {

}

function addStep() {

}

function update() {

}

function remove() {

}