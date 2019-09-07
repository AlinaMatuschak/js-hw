import { refs } from "../utils/constants";
import template from "../templates/note.hbs";

const array = JSON.parse(localStorage.getItem('notes'));

const refreshList = data => {
  const notes = data || array;
  const htmlNotesList = template({ notes });
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
};

export { refreshList };