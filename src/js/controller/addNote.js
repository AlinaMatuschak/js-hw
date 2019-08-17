import notepad from '../app';
import addListItem from '../view/addListItem';
import {refs} from '../utils/constants';

const handleFormClick = (event) => {
    const shortid = require('shortid');
    event.preventDefault();
    if(refs.inputForFormTitle.value.length > 0 && refs.textareaForFormBody.value.length > 0) {
        addListItem(refs.list, notepad.saveNote({ 
            id: shortid.generate(),
            title: refs.inputForFormTitle.value,
            body: refs.textareaForFormBody.value,
        }));
        event.currentTarget.reset();
    } else {alert('Необходимо заполнить все поля!')};
};

export default handleFormClick;