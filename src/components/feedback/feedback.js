import createElement from '../../service/createElement';
import unknownUser from '../../images/icons8-пользователь-мужчина-в-кружке-50.png';
import updateDate from '../../service/updateDate';

export default class Feedback {
  constructor({name, rating, date, text, createTime, img}) {
    this.container = createElement('div', 'feedback');
    this.name = name;
    this.date = date;
    this.text = text;
    this.rating = rating;
    this.img = img;
    this.createTime = createTime;
  }

  setImage() {
    return `<img src="${
      this.img ? this.img : unknownUser
    }" alt="Unknown user" class="feedback__image">`.trim();
  }

  setTitle() {
    const str = updateDate(this.date, this.createTime);
    return `
                <div class="feedback__titleContainer">
                  <p class="feedback__title">${this.name}</p>
                  <p class="feedback__time">${str}</p>
                  <button class="feedback__deleteButton"></button>
              </div>`.trim();
  }

  setRating() {
    const container = createElement('div', 'feedback__rating');
    const roundRating = Math.floor(this.rating);
    const percent = (this.rating - roundRating) * 100;
    const starArr = new Array(5).fill(0).map((el, index) => {

      if (index < roundRating) {
        const star = createElement('div', 'star star_active');
        return star;
      }

      if (index == roundRating) {
        const star = createElement('div', 'star');
        star.style.setProperty('--second', `${percent}%`);
        return star;
      }

      if (index > roundRating) {
        const star = createElement('div', 'star star_inactive');
        return star;
      }

    });

    container.append(...starArr);
    return container;
  }

  setText() {
    return createElement('p', 'feedback__body', this.text);
  }

  createLike() {
    return createElement('button', 'feedback__like');
  }

  render() {
    this.container.innerHTML += this.setImage();
    const feedbackContainer = createElement('div', 'feedback__container');
    feedbackContainer.innerHTML += this.setTitle();
    feedbackContainer.append(
      this.setRating(),
      this.setText(),
      this.createLike()
    );
    this.container.append(feedbackContainer);
    return this.container;
  }
}
