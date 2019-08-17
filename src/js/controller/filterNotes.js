import renderNoteList from '../view/renderNoteList';
import notepad from '../app';
import {refs} from '../utils/constants';

const handleFilterNotes = ({target}) => {
    renderNoteList(refs.list, notepad.filterNotesByQuery(target.value));
};

export default handleFilterNotes;