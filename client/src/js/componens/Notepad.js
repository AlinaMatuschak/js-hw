import * as api from '../../services/api.js';

class Notepad {
    constructor() {
      this._notes = [];
    }

    get notes() {
      return api.getNotes().then(notes => {
        this._notes = notes;
        return this._notes;
      })
    }
    
    saveNote(note) {
      return api.saveNote(note).then(note => {
        this._notes.push(note);
        return note;
      })
    }

    removeListItem(id) {
      return api.deleteNote(id).then(() => this._notes = this._notes.filter(el => el.id !== id));
    }
    
    updateNote(id, noteToUpdate) {
      return api.updateNote(id, noteToUpdate);
    }

    filterNotesByQuery(query) {
      return Promise.resolve(this._notes.filter(el =>
        el.title.toLowerCase().includes(query.toLowerCase()) ||
        el.body.toLowerCase().includes(query.toLowerCase())));
    }

    filterNotesByPriority() {
      return Promise.resolve(this._notes.sort((a, b) => b.priority - a.priority));
    }
  
    findNoteById(id) {
      return this._notes.find(el => el.id === id);
    }
  }
  
  export default Notepad;