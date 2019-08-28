import Handlebars from "handlebars";

import { refs } from "../utils/constants";
import  template from "../templates/note.js";
import notepad from "./model";

const array = notepad.notes;

const refreshList = data => {
  const notes = data || array;
  const htmlNotesList = Handlebars.compile(template)({ notes });
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
};

export { refreshList };