import { refs, PRIORITY_TYPES, NOTIFICATION_MESSAGES } from "../../utils/constants";
import { openModal, closeModal } from '../../utils/libraries/micromodal';
import { errorMessage, successMessage } from '../../utils/libraries/notyf';
import { refreshList } from '../view';
import notepad from '../model';

function handleOpenModal(event) {
    event.preventDefault();
    openModal();
};

function handleCloseModal() {
    reset();
    closeModal();
};

function reset() {
    refs.inputForFormTitle.value = '';
    refs.textareaForFormBody.value = '';
};

function handleFormClick(event) {
    event.preventDefault();
    if(refs.inputForFormTitle.value.length > 0 && refs.textareaForFormBody.value.length > 0) {
        notepad.saveNote({ 
            title: refs.inputForFormTitle.value,
            body: refs.textareaForFormBody.value,
            priority: PRIORITY_TYPES.LOW,
        }).then((notes) => refreshList(notes));
        successMessage(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
        reset();
        closeModal();
    } else {errorMessage(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY)};
};

export { handleOpenModal, handleCloseModal, handleFormClick };