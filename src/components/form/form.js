import Feedback from '../feedback/feedback';

class Form {
  constructor(className, overlay) {
    this.forms = [...document.querySelectorAll(className)];
    this.overlay = overlay;
  }

  close() {
    this.overlay.addEventListener('click', (e) => {
      const target = e.target;
      if (
        target.classList.contains('form__closeButton') ||
        target === this.overlay
      ) {
        this.overlay.classList.remove('overlay_active');
        this.forms.forEach((form) => {
          if (form.classList.contains('form_active')) {
            form.classList.remove('form_active');
          }
        });
      }
    });
  }

  isValid(formInput) {
    if (!formInput.validity.valid) {
      formInput.classList.add('feedbackForm__input_type_error');
    } else {
      formInput.classList.remove('feedbackForm__input_type_error');
    }
  }

  hasInvalidInput(inputList) {
    const res = inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
    return res;
  }
}

export default Form;
