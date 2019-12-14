const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>  {
    return 'Your notes...';
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.find((note) => note.title == title)
        
    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body,
        });
        console.log(chalk.green.inverse("New note added!"));
    } else {
        console.log(chalk.red.inverse("Note title taken!"));
    }

    saveNotes(notes);
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);

    //write to file 
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {

    const notes = loadNotes();
    let noteExists = false;

    const newNotes = notes.filter((note) => {
        if (note.title == title) {
            noteExists = true;
        }
        return note.title != title;
    });

    if (noteExists) {
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }

    saveNotes(newNotes);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your notes:'));
    notes.forEach((note) => {
        console.log('Title: ' + note.title + ', Body: ' + note.body);
    });
}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => title === note.title);
    if (note) {
        console.log(chalk.inverse('Title: ' + title) + ', Body: ,' + note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }

}
  
module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};