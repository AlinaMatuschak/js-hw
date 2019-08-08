const removeListItem = (el) => {
    notepad.removeListItem(el.dataset.id);
    el.remove();
}