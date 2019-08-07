class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  static generateUniqueId() {
  return Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);
  }

  addListItem(listRef, note) {
    listRef.appendChild(note);
  }

  removeListItem(id) {
    this._notes = this._notes.filter(el => el.id !== id);
  }

  filterNotes(symbols) {
    return this._notes.filter(el => el.title.toLowerCase().includes(symbols.toLowerCase()) || el.body.toLowerCase().includes(symbols.toLowerCase()));
  }
}

