import { NOTIFICATION_MESSAGES } from "../../utils/constants";
import notepad from "../model";
import { refreshList } from '../view';
import { successMessage} from '../../utils/libraries/notyf';

export function handleDeleteButton({target}) {
    if (target.textContent !== 'delete') return;
    notepad.removeListItem(target.closest('.note-list__item').dataset.id).then((notes) => refreshList(notes));
    successMessage(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
};