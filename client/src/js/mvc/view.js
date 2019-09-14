import { refs } from "../utils/constants";
import template from "../templates/note.hbs";
import notepad from '../mvc/model';

const refreshList = data => {
  notepad.notes.then(notes => {
    const array = [];
    notes.map(el => array.push(el))
    return array.sort((a, b) => b.priority - a.priority);
  }).then(ar => {
    const notes = data || ar;
    const htmlNotesList = template({ notes });
    refs.list.innerHTML = "";
    refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
  })

};

export { refreshList };