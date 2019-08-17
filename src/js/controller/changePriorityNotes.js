import notepad from '../app';
import renderNoteList from '../view/renderNoteList';
import { refs, PRIORITY_TYPES } from '../utils/constants';

const handleChangePriority = ({target}) => {
    if (target.textContent !== 'expand_more' && target.textContent !== 'expand_less') return
    const li = notepad.findNoteById(target.closest('.note-list__item').dataset.id);
    const stepInPriority = 1;
    if(target.textContent !== 'expand_more' && li.priority < PRIORITY_TYPES.HIGH) {
        li.priority += stepInPriority;
    };
    if(target.textContent !== 'expand_less' && li.priority > PRIORITY_TYPES.LOW) {
        li.priority -= stepInPriority;
    };
    const sort = notepad.notes.sort((a, b) => b.priority - a.priority);
    renderNoteList(refs.list, sort);
}

export default handleChangePriority;