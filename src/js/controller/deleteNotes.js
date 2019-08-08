const handleDeleteButton = ({target}) => {
    if (target.textContent !== 'delete') return;
    removeListItem(target.closest('.note-list__item'));
};

refs.list.addEventListener('click', handleDeleteButton);