import { refreshList } from '../view';
import notepad from "../model";

export function handleFilterNotes({target}) {
     notepad.filterNotesByQuery(target.value).then((notes) => refreshList(notes));
};