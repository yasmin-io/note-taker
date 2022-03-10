const util = require("util");
const fs = require("fs");

const readDbJsonAsync = util.promisify(fs.readFile);

class Store {
  readData() {
    return readDbJsonAsync("db/db.json", "utf8");
  }

  getAllNotes() {
    return this.readData().then((notes) => {
      console.log(notes);
      return JSON.parse(notes);
    });
  }
}

module.exports = new Store();
