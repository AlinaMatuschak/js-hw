import notepad from "../model";
import { PRIORITY_TYPES, NOTIFICATION_MESSAGES } from "../../utils/constants";
import { successMessage} from '../../utils/libraries/notyf';
import { refreshList } from '../view';

export function handleChangePriority({target}) {
    if (target.textContent !== 'expand_more' && target.textContent !== 'expand_less') return
    const li = notepad.findNoteById(target.closest('.note-list__item').dataset.id);
    const stepInPriority = 1;
    if(target.textContent !== 'expand_more' && li.priority < PRIORITY_TYPES.HIGH) {
        li.priority += stepInPriority;
        successMessage(NOTIFICATION_MESSAGES.PRIORITY_CHANGED_SUCCESS);
    };
    if(target.textContent !== 'expand_less' && li.priority > PRIORITY_TYPES.LOW) {
        li.priority -= stepInPriority;
        successMessage(NOTIFICATION_MESSAGES.PRIORITY_CHANGED_SUCCESS);
    };
    const sort = notepad.notes.sort((a, b) => b.priority - a.priority);
    refreshList(sort);
};