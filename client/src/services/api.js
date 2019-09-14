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

export {getNotes, saveNote, deleteNote}