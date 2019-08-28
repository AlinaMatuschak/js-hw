import notepad from "../model";
import { successMessage } from '../../utils/libraries/notyf';
import { NOTIFICATION_MESSAGES } from '../../utils/constants';

export function handleEditNote ({target}) {
    if(target.textContent !== 'edit' && target.textContent !== 'close') return
    const li = target.closest('.note-list__item');
    const note = notepad.findNoteById(li.dataset.id);
    const title = li.querySelector('.note__title');
    const body = li.querySelector('.note__body');

    if(!title.hasAttribute('contenteditable') || title.getAttribute('contenteditable') === 'false') {
        title.setAttribute('contenteditable', true);
        body.setAttribute('contenteditable', true);
        note.title = title.textContent;
        note.body = body.textContent;
        target.textContent = 'close';
        li.style.boxShadow = "0px 0px 10px #2196f3";
        target.style.backgroundColor = "#2196f3";
        target.style.borderRadius = "25px";
        return
    };
    if(title.getAttribute('contenteditable') === 'true') {
        title.setAttribute('contenteditable', false);
        body.setAttribute('contenteditable', false);
        target.textContent = 'edit';
        li.removeAttribute('style');
        target.removeAttribute('style');
        successMessage(NOTIFICATION_MESSAGES.NOTE_SAVE_SUCCESS);
    };
};