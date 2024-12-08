import { createElement } from "../../framework/render.js";

function createReadStorysTitleComponentTemplate() {
  return `
    <section class="readMoreStorys">
      <div class="readMoreStorys__container container">
        <!-- анатология к секции -->
        <p class="readMoreStorys__text-big text-big">
          <span class="orange-word">Счастливые</span> истории наших <br />
          подписчиков
        </p>
      </div>
    </section>

  `;
}

export default class ReadStorysTitleComponent {
  getTemplate() {
    return createReadStorysTitleComponentTemplate();
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
