const router = require("express").Router();
const res = require("express/lib/response");
const store = require("../db/store");

// GET request handler which returns JSON object of all notes on /api/notes
router.get("/notes", (request, response) => {
  console.log("Get all notes api route triggered");
  // call a function from our 'store' which will get all notes from db/db.json and return on response
  store.getAllNotes().then((notes) => {
    return response.json(notes);
  });
});
// post request handler which ADDS a new note to db.json
router.post("/notes", (req, res) => {
  console.log("post all notes api route triggered");
  // call a function from our 'store' which will get all notes from db/db.json add our new note from req.body and add new notes back into db/db.json
  store.postNewNote(req.body).then((note) => {
    res.json(note);
  });
});

module.exports = router;
