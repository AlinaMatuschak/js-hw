import MicroModal from 'micromodal';

MicroModal.init();

const openModal = () => {
  MicroModal.show('note-editor-modal');
};

const closeModal = () => {
  MicroModal.close('note-editor-modal');
};

export { openModal, closeModal };