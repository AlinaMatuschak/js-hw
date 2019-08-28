import { refs } from "../../utils/constants";
import { handleOpenModal, handleCloseModal, handleFormClick } from './_modal';
import { handleFilterNotes } from './_filterNotes';
import { handleEditNote } from './_editNote';
import { handleDeleteButton } from './_deleteNotes';
import { handleChangePriority } from './_changePriority';

refs.button.addEventListener('click', handleOpenModal);
refs.buttonForSaveNote.addEventListener('click', handleFormClick);
refs.buttonCancel.addEventListener('click', handleCloseModal);
refs.inputForFilter.addEventListener('input', handleFilterNotes);
refs.list.addEventListener('click', handleEditNote);
refs.list.addEventListener('click', handleDeleteButton);
refs.list.addEventListener('click', handleChangePriority);