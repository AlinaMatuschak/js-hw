class Notepad {
    constructor(notes) {
      this._notes = notes;
    }
  
    get notes() {
      return this._notes;
    }
  
    saveNote(note) {
      this._notes.push(note);
      return note;
    }
  
    removeListItem(id) {
      this._notes = this._notes.filter(el => el.id !== id);
      return this;
    }
  
    filterNotesByQuery(query) {
      return this._notes.filter(el =>
      el.title.toLowerCase().includes(query.toLowerCase()) ||
      el.body.toLowerCase().includes(query.toLowerCase()));
    }
  
    findNoteById(id) {
      return this._notes.find(el => el.id === id);
    }
  }
  
  export default Notepad;