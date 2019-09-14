import { refs } from "../utils/constants";
import template from "../templates/note.hbs";
import notepad from '../mvc/model';

const refreshList = data => {
  const array = [];
  notepad.notes.then(notes => notes.map(el => array.push(el)));

  const notes = data || array;
  const htmlNotesList = template({ notes });
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
};

export { refreshList };