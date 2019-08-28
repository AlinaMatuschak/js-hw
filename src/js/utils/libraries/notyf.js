import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 

const notyf = new Notyf();

const errorMessage = (text) => {
  notyf.error(text);
};

const successMessage = (text) => {
  notyf.success(text);
};

export { errorMessage, successMessage };