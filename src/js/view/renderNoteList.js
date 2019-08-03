const renderNoteList = (listRef, notes) => {
  const replaceListRef = creatElement('ul', 'note-list');
  notes.map(obj => replaceListRef.appendChild(createListItem(obj)));
  listRef.replaceWith(replaceListRef);
};
