const util = require("util");
const fs = require("fs");

const readDbJsonAsync = util.promisify(fs.readFile);
const writeDbJsonAsync = util.promisify(fs.writeFile);

class Store {
  readData() {
    return readDbJsonAsync("db/db.json", "utf8");
  }

  writeData(newNotes) {
    return writeDbJsonAsync("db/db.json", JSON.stringify(newNotes));
  }

  getAllNotes() {
    return this.readData().then((notes) => {
      console.log(notes);
      return JSON.parse(notes);
    });
  }

  postNewNote(newNote) {
    console.log(newNote);

    const noteToBeAdded = {
      title: newNote.title,
      text: newNote.text,
      id: 1234567,
    };

    console.log(noteToBeAdded);
    return this.getAllNotes()
      .then((notes) => {
        console.log(notes);
        return [...notes, noteToBeAdded];
      })
      .then((newNotes) => {
        console.log(newNotes);
        this.writeData(newNotes);
      })
      .then(() => {
        return noteToBeAdded;
      });
  }
}

module.exports = new Store();
