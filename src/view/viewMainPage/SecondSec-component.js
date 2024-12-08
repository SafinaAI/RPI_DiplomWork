import { createElement } from "../../framework/render.js";

function createSecondSecComponentTemplate() {
  return `<section class="secnd-section">
      <div class="secnd-section__container container">
        <p class="secnd-section__text">
          Поднимите лапки, если вы готовы нам помочь
        </p>
        <p class="secnd-section__title-text text-middle">
          Мы используем силу любви, чтобы сделать сообщества и семьи домашних
          животных ближе, крепче и здоровее
        </p>
        <div class="secnd-section__line line"></div>
      </div>
    </section>

  `;
}

export default class SecondSecComponent {
  getTemplate() {
    return createSecondSecComponentTemplate();
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
