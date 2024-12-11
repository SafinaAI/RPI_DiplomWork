import { createElement } from "../../framework/render.js";

function createAdoptFriendTitleComponentTemplate() {
  return `
  <section class="secnd-section ">
      <div class="secnd-section__container container adoptFriend-container ">
        <p class="secnd-section__text">
          Поднимите лапки, если вы готовы нам помочь
        </p>
        <p class="secnd-section__title-text text-middle">
          В приютах живет много питомцев, каждый мечтает о доме. Подарите 
          им свою любовь и заботу!
        </p>
        <div class="secnd-section__line line"></div>
        </div>
        <hr class="secnd-section__line line">
    </section>

  `;
}

export default class AdoptFriendTitleComponent {
  getTemplate() {
    return createAdoptFriendTitleComponentTemplate();
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
