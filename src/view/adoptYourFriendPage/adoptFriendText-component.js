import { createElement } from "../../framework/render.js";

function createAdoptFriendTextComponentTemplate() {
  return `
  <section class="adoptFriendText-section">
      <div class="adoptFriendText-section__container container">
        <!-- название секции Наша Миссия -->
        <p class="adoptFriendText-section__text-small text-small">Они ищут дом</p>
        <!-- анатология к секции -->
        <p class="adoptFriendText-section__text-big text-big">
          Все питомцы заслуживают иметь <span class="orange-word">дом</span>. <br />
          Помогите им его обрести.
        </p>
      </div>
    </section>

  `;
}

export default class AdoptFriendTextComponent {
  getTemplate() {
    return createAdoptFriendTextComponentTemplate();
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
