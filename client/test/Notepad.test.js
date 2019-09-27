import Notepad from '../src/js/componens/Notepad';
import { getNotes, deleteNote } from '../src/services/api';

const PRIORITY_TYPES = require('./constants');
const initialNotes = require('./bd');

//  =================== get=========================  //
test(' get notes', async () => {
  const init = await getNotes();
  const notepad = new Notepad();
  const notepadNotes = await notepad.notes;
  expect(notepadNotes).toEqual(init);
});

// =====================save======================= //
describe('save note', () => {
  test('save note', async () => {
    const target = {
        title: "Winter clothes",
        body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
        priority: PRIORITY_TYPES.HIGH
    };
    const notepad = new Notepad();
    const newNotes = await notepad.saveNote(target);
    const { title, body, priority } = newNotes[newNotes.length - 1];
    const sourse = {
      title,
      body,
      priority
    };
    expect(sourse).toEqual(target);
  });

  afterAll( async () => {
    const notes = await getNotes();
      if (notes.length > 0) {
        const { id } = notes[notes.length - 1];
        deleteNote(id);
      }
    });
  });

// ===================== delete ===================== //
describe('delete note', () => {
  beforeAll(() => {
    const { title, body, priority } = initialNotes[0];
    const sourse = {
      title,
      body,
      priority
    };
    const notepad = new Notepad();
    notepad.saveNote(sourse);
  });

  test('delete note', async () => {
    const bd = await getNotes();
    if(bd) console.log('yes');
    const notepad = new Notepad(bd);
    const { id } = bd[bd.length - 1];
    const newNotes = await notepad.removeListItem(id);
    if(newNotes) console.log('yes');
    const notes = await getNotes();
    expect(newNotes).toEqual(notes);
  });
});