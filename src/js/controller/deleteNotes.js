import removeListItem from '../view/removeListItem';

const handleDeleteButton = ({target}) => {
    if (target.textContent !== 'delete') return;
    removeListItem(target.closest('.note-list__item'));
};

export default handleDeleteButton;