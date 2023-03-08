import './styles/index.css';
import Feedback from './components/feedback/feedback';
import FeedbackForm from './components/form/feedbackForm';
import sliderAnimation from './service/sliderAnimation';
import initialArr from './service/initialArr';

const feedbackContainer = document.querySelector('.feedbacks__list');
const feedbackButton = document.querySelector('.feedbacks__button');
const overlay = document.querySelector('.overlay');
const feedbackForm = new FeedbackForm(
  'form',
  overlay,
  Feedback,
  feedbackContainer
);
feedbackForm.close();
feedbackForm.validate();
sliderAnimation();

feedbackContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('feedback__like')) {
    target.classList.toggle('feedback__like_active'); //поставить лайк
  }

  if (target.classList.contains('feedback__deleteButton')) {
    const feedback = target.closest('.feedback');
    const feedBacksList = [...document.querySelectorAll('.feedback')];
    const updateList = feedBacksList.filter((el) => el !== feedback); //удалить отзыв
    feedbackContainer.innerHTML = '';
    feedbackContainer.append(...updateList);
  }
});

feedbackButton.addEventListener('click', () => {
  overlay.classList.add('overlay_active'); //открыть попап для отзыва
  feedbackForm.form.classList.add('form_active');
});

feedbackForm.form.addEventListener('submit', (e) => {
  e.preventDefault();
  feedbackForm.createFeedback();
});

initialArr.forEach((el) => {
  const feed = new Feedback(el); // просто 2 отзыва, чтобы не выглядело пустым
  feedbackContainer.append(feed.render());
});
