const handleFormClick = (event) => {
    event.preventDefault();
    if(refs.inputForFormTitle.value.length > 0 && refs.textareaForFormBody.value.length > 0) {
        addListItem(refs.list, notepad.saveNote({ 
            id: Notepad.generateUniqueId(),
            title: refs.inputForFormTitle.value,
            body: refs.textareaForFormBody.value,
        }));
        event.currentTarget.reset();
    } else {alert('Необходимо заполнить все поля!')};
};

refs.formForAddNote.addEventListener('submit', handleFormClick);