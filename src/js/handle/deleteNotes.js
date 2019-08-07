const handleDeleteButton = ({target}) => {
    if (target.textContent !== 'delete') return
    const deleteNote = target.closest('.note-list__item');
    notepad.removeListItem(deleteNote.dataset.id);
    deleteNote.remove();
};

document.querySelector('.note-list').addEventListener('click', handleDeleteButton);