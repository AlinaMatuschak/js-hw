import notepad from "../model";
import { PRIORITY_TYPES, NOTIFICATION_MESSAGES } from "../../utils/constants";
import { successMessage} from '../../utils/libraries/notyf';
import { refreshList } from '../view';

export function handleChangePriority({target}) {
        if (target.textContent !== 'expand_more' && target.textContent !== 'expand_less') return
        const id = target.closest('.note-list__item').dataset.id
        const li = notepad.findNoteById(id);
        const stepInPriority = 1;
        const note = target.closest('.note-list__item');
        const title = note.querySelector('.note__title');
        const body = note.querySelector('.note__body');

        function getContecst(priority) {
            return {
                "id": id,
                "title": title.textContent,
                "body": body.textContent,
                "priority": priority,
            };
        };

        if(target.textContent !== 'expand_more' && li.priority < PRIORITY_TYPES.HIGH) {
            li.priority += stepInPriority;
            notepad.updateNote(id, getContecst(li.priority));
            successMessage(NOTIFICATION_MESSAGES.PRIORITY_CHANGED_SUCCESS);
        };
        if(target.textContent !== 'expand_less' && li.priority > PRIORITY_TYPES.LOW) {
            li.priority -= stepInPriority;
            notepad.updateNote(id, getContecst(li.priority));
            successMessage(NOTIFICATION_MESSAGES.PRIORITY_CHANGED_SUCCESS);
        };
        notepad.filterNotesByPriority().then((notes) => refreshList(notes));
};