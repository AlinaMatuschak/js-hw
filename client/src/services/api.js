import "core-js/stable";
import "regenerator-runtime/runtime";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/notes";

const getNotes = async() => {
    try {
        const notes = await axios.get();
        return notes.data;
    } catch (err) {
        throw err
    }
}

const saveNote = async(note) => {
    try {
        const postNote = await axios.post('', note);
        return postNote.data;
    } catch (err) {
        throw err
    }
}

const deleteNote = async(id) => {
    try {
        return await axios.delete(`/${id}`);
    } catch(err) {
        throw err
    }
}

const updateNote = async(id, noteToUpdate) => {
    try {
        return await axios.put( `/${id}`, noteToUpdate);
    } catch(err) {
        throw err
    }
}

// export {getNotes, saveNote, deleteNote, updateNote}
module.exports = {getNotes, saveNote, deleteNote, updateNote};