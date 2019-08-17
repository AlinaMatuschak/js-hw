import notepad from '../app';

const removeListItem = (el) => {
    notepad.removeListItem(el.dataset.id);
    el.remove();
}

export default removeListItem;