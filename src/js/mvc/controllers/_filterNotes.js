import { refreshList } from '../view';
import notepad from "../model";

export function handleFilterNotes({target}) {
    refreshList(notepad.filterNotesByQuery(target.value));
};