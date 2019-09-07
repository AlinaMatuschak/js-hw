import { refreshList } from './mvc/view';
import './mvc/controllers/listeners';
import notepad from './mvc/model';

refreshList(notepad.notes);