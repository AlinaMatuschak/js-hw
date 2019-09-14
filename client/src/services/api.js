const URL = "http://localhost:3000/notes";

const getNotes = () => {
  return  fetch(URL)
    .then(notes => notes.json())
    .catch(console.error);
}

const saveNote = (note) => {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(note => note.json())
    .catch(console.error)
}

const deleteNote = (id) => {
    return fetch(URL + `/${id}`, {
        method: 'DELETE',
    })
}

const updateNote = (id, noteToUpdate) => {
    return fetch(URL + `/${id}`, {
        method: 'PUT',
        body: JSON.stringify(noteToUpdate),
        headers: {
            'Content-Type': 'application/json',
  },
    })
}

export {getNotes, saveNote, deleteNote, updateNote}