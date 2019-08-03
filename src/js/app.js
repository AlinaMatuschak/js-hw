const notepad = new Notepad(initialNotes);
renderNoteList(document.querySelector('.note-list'), notepad.notes);
