import { refreshList } from './mvc/view.js';
import './mvc/controllers/listeners';
import notepad from './mvc/model.js';

notepad.notes.then(notes => refreshList(notes)).then(console.log).catch(console.error);
 