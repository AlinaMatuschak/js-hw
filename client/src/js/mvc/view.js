import { refs } from "../utils/constants";
import template from "../templates/note.hbs";
import notepad from "./model";

const refreshList = data => {
  notepad.filterNotesByPriority().then(() => {
    const htmlNotesList = data.map(note => template(note)).join('\n');
    refs.list.innerHTML = "";
    refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
  })
};

export { refreshList };