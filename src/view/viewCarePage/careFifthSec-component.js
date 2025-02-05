import { createElement } from "../../framework/render.js";

function createCareFifthSecComponentTemplate() {
  return `
       <section class="fifthSec">
      <div class="fifthSec__container container">
        <div class="fifthSec__wrapper">
          <h2 class="fifthSec__title">
            Поделитесь своей заботой — станьте
            <span class="orange-word">другом</span> для хвостиков!
          </h2>
          <button class="fifthSec__button button">Добавить резюме</button>
        </div>
      </div>
    </section>
    `;
}

export default class CareFifthSecComponent {
  getTemplate() {
    return createCareFifthSecComponentTemplate();
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
