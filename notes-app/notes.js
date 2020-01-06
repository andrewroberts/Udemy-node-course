
const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)

  if (duplicateNote === undefined) {
    notes.push({title: title, body: body})
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red.inverse('Note not added - title already used'))
  }

} // addNotes()

const removeNotes = (title) => {
  const notes = loadNotes()

  const notesLeft = notes.filter(note => note.title !== title)

  if (notes.length !== notesLeft.length) {
    saveNotes(notesLeft) 
    console.log(chalk.green.inverse('Removed note'))
  } else {
    console.log(chalk.red.inverse('Removed note'))
  }

} // removeNotes()

const listNotes = () => {
  console.log(chalk.green('Notes List'))
  loadNotes().forEach(note => console.log(note.title))
}

const readNote = (title) => {
  const foundNote = loadNotes().find(note => note.title === title)

  if (foundNote === undefined) {
    console.log(chalk.red.inverse('Note not found!'))
  } else {
    console.log(chalk.green('Note found:'))
    console.log(foundNote.body)
  }

}

// Private Functions
// -----------------

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (error) {
    // notes already initialised
  }
}

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote
}