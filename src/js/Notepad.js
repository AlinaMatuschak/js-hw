class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  static generateUniqueId() {
  return Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);
  }

  get notes() {
    return this._notes;
  }

  saveNote(note) {
    note.priority = PRIORITY_TYPES.LOW;
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
}

