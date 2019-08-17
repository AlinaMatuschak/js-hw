import createListItem from './createListItem';

const addListItem = (listRef, note) => {
    listRef.append(createListItem(note));
}

export default addListItem;