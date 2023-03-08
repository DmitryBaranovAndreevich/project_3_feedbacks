import Form from './form';
import sliderAnimation from '../../service/sliderAnimation';
class FeedbackForm extends Form {
  constructor(className, overlay, feedbackClass, feedbackContainer) {
    super(className, overlay);
    this.feedbackForm = this.forms.find((el) =>
      el.classList.contains('feedbackForm')
    );
    this.feedback = feedbackClass;
    this.feedbackContainer = feedbackContainer;
    this.createFeedbackButton = this.feedbackForm.querySelector(
      '.feedbackForm__submitButton'
    );
    this.elements = [...this.feedbackForm.querySelectorAll('.input')];
  }

  get form() {
    return this.feedbackForm;
  }

  getFeedbackPopupValue() {
    return this.elements.reduce((priv, el) => {
      return { ...priv, [el.name]: el.value };
    }, {});
  }

  createFeedback() {
    this.checkForm();
    if (!this.hasInvalidInput(this.elements)) {
      const createFeedbackConfig = this.getFeedbackPopupValue();
      this.feedbackContainer.append(
        new this.feedback({
          ...createFeedbackConfig,
          createTime: new Date(),
        }).render()
      );
      this.overlay.classList.remove('overlay_active');
      this.feedbackForm.classList.remove('form_active');
      this.elements.forEach((el) => (el.value = ''));
      sliderAnimation();
    }
  }

  showErr(input) {
    const errMes = this.feedbackForm.querySelector(
      `.feedbackForm__${input.name}_error`
    );
    errMes.classList.add(`feedbackForm__${input.name}_error_active`);
  }

  hideInputError(input) {
    const errMes = this.feedbackForm.querySelector(
      `.feedbackForm__${input.name}_error`
    );

    if (
      errMes&&errMes.classList.contains(
        `feedbackForm__${input.name}_error_active`
      )
    ) {
      errMes.classList.remove(`feedbackForm__${input.name}_error_active`);
    }
  }

  checkForm() {
    this.elements.forEach((input) => {
      if (!input.validity.valid) this.showErr(input);
    });
  }

  validate() {
    this.elements.forEach((input) => {
      input.addEventListener('input', () => {
        this.isValid(input);
        this.hideInputError(input);
      });
    });
  }
}

export default FeedbackForm;
