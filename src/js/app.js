import Notepad from './Notepad';
import initialNotes from './bd';
import renderNoteList from './view/renderNoteList';
import {refs} from './utils/constants';
import handleFormClick from './controller/addNote';
import handleDeleteButton from './controller/deleteNotes';
import handleFilterNotes from './controller/filterNotes';
import handleChangePriority from './controller/changePriorityNotes';
import handleEditNote from './controller/editNote';

const notepad = new Notepad(initialNotes);
renderNoteList(refs.list, notepad.notes);

refs.formForAddNote.addEventListener('submit', handleFormClick);
refs.list.addEventListener('click', handleDeleteButton);
refs.list.addEventListener('click', handleChangePriority);
refs.list.addEventListener('click', handleEditNote);
refs.inputForFilter.addEventListener('input', handleFilterNotes);


export default notepad;