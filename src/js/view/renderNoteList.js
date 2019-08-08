const renderNoteList = (listRef, notes) => {
  listRef.innerHTML = '';
  listRef.append(...notes.map(e => createListItem(e)));
};
