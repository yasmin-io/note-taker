const util = require("util");
const fs = require("fs");
const { randomUUID } = require("crypto");

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

    // Setting how we want the information to save
    const noteToBeAdded = {
      title: newNote.title,
      text: newNote.text,
      // Unique Id using uuid goes here. This will help give a unique identity to make referencing each note easier.
      id: randomUUID(),
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
