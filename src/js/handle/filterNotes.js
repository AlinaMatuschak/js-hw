const handleFilterNotes = ({target}) => {
    renderNoteList(document.querySelector('.note-list'), notepad.filterNotes(target.value));
};

refs.inputForFilter.addEventListener('input', handleFilterNotes);