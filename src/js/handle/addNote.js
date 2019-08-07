const handleFormClick = (event) => {
    event.preventDefault();
    if(refs.inputForFormTitle.value.length > 0 && refs.textareaForFormBody.value.length > 0) {
        notepad.addListItem(document.querySelector('.note-list'), createListItem({ 
            id: Notepad.generateUniqueId(),
            title: refs.inputForFormTitle.value,
            body: refs.textareaForFormBody.value,
            priority: PRIORITY_TYPES.LOW,
        }));
        event.currentTarget.reset();
    } else {alert('Необходимо заполнить все поля!')};
};

refs.formForAddNote.addEventListener('submit', handleFormClick);