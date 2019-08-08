const handleFilterNotes = ({target}) => {
    renderNoteList(refs.list, notepad.filterNotesByQuery(target.value));
};

refs.inputForFilter.addEventListener('input', handleFilterNotes);