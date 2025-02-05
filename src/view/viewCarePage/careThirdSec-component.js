import { createElement } from "../../framework/render.js";

function createCareThirdSecComponentTemplate() {
  return `
        <section class="thirdSec">
      <div class="thirdSec__container container">
        <div class="thirdSec__wrapper">
          <h3 class="thirdSec__title">Это важно при выборе специалиста</h3>
          <p class="thirdSec__text">
            Выбирая специалиста, доверьтесь не только рейтингу, но и своему
            сердцу. Почитайте отзывы, посмотрите работы — важно, чтобы в них
            чувствовалась любовь к животным. Задайте пару вопросов, а если
            питомец останется у специалиста, уточните, сможет ли он присылать
            новости. Пусть ваш хвостик будет в заботливых и надёжных руках!
          </p>
        </div>
      </div>
    </section>
   
    `;
}

export default class CareThirdSecComponent {
  getTemplate() {
    return createCareThirdSecComponentTemplate();
  }
  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
