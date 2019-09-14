export const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

export const NOTIFICATION_MESSAGES = {
  NOTE_DELETED_SUCCESS: 'Заметка успешно удалена',
  NOTE_ADDED_SUCCESS: 'Заметка успешно добавлена 🎉',
  EDITOR_FIELDS_EMPTY: 'Заполните поля редактора',
  NOTE_SAVE_SUCCESS: 'Заметка успешно сохранина 🎉',
  PRIORITY_CHANGED_SUCCESS: 'Приоретет заметки успешно изменён',
};

export const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

export const refs = {
  list: document.querySelector('.note-list'),
  button: document.querySelector('.action__icon'),
  buttonForSaveNote: document.querySelector('button[type="submit"]'),
  buttonCancel: document.querySelector('button[data-micromodal-close]'),
  inputForFormTitle: document.querySelector('input[name="note_title"]'),
  textareaForFormBody: document.querySelector('textarea[name="note_body"]'),
  inputForFilter: document.querySelector('.search-form__input'),
};