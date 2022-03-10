const router = require("express").Router();
const path = require("path");

// GET request handler which returns notes.html on /notes
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET request handler which returns index.html on /*
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
