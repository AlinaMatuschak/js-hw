const creatElement = (el, classes, text = null) => {
  const element = document.createElement(el);
  classes.split(' ').map(e => element.classList.add(e));
  if (text) element.textContent = text;
  return element;
};

const creatButton = (action, text) => {
  const button = creatElement('button', 'action');
  button.setAttribute('data-action', action);
  button.appendChild(creatElement('i', 'material-icons action__icon', text));
  return button;
};

const createNoteContent = (title, body) => {
  const content = creatElement('div', 'note__content');
  content.appendChild(creatElement('h2', 'note__title', title));
  content.appendChild(creatElement('p', 'note__body', body));
  return content;
};

const findPriority = (pr) => {
  let priority = Object.keys(PRIORITY_TYPES).find(el => PRIORITY_TYPES[el] === pr);
  priority = priority[0] + priority.slice(1).toLowerCase();
  return priority;
};

const createNoteFooter = (priority) => {
  const footer = creatElement('footer', 'note__footer');
  const firstSection = creatElement('section', 'note__section');
  firstSection.append(creatButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN), creatButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP), creatElement('span', 'note__priority', `Priority: ${findPriority(priority)}`));
  const secondSection = creatElement('section', 'note__section');
  secondSection.append(creatButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT), creatButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE));
  footer.append(firstSection, secondSection);
  return footer;
};

const createListItem = ({
  id, title, body, priority,
}) => {
  const listItem = creatElement('li', 'note-list__item');
  listItem.setAttribute('data-id', id);
  const note = creatElement('div', 'note');
  note.append(createNoteContent(title, body), createNoteFooter(priority));
  listItem.appendChild(note);
  return listItem;
};
