class Notepad {
    constructor(notes) {
      this._notes = notes;
    }

    get notes() {
      return this._notes;
    }
    
    localStorage(notes) {
      try {
        const stringifyNotes = JSON.stringify(notes);
        localStorage.setItem('notes', stringifyNotes);
      } catch (err) {
        console.error("Set state error: ", err);
      };
    }
    
    saveNote(note) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this._notes.push(note);
          this.localStorage(this._notes);
          resolve(note);
        }, 500);
      });
    }
  
    removeListItem(id) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this._notes = this._notes.filter(el => el.id !== id);
          this.localStorage(this._notes);
          resolve(this._notes);
        }, 800);
      });
    }
  
    filterNotesByQuery(query) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredNotes = this._notes.filter(el =>
            el.title.toLowerCase().includes(query.toLowerCase()) ||
            el.body.toLowerCase().includes(query.toLowerCase()));
            resolve(filteredNotes);
          }, 500);
      });
    }

    filterNotesByPriority() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this._notes.sort((a, b) => b.priority - a.priority);
          resolve(this._notes);
        }, 400);
      });
    }
  
    findNoteById(id) {
      return this._notes.find(el => el.id === id);
    }
  }
  
  export default Notepad;