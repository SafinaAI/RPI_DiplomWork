import { createElement } from "../../framework/render.js";

function createAdoptFriendTextComponentTemplate() {
  return `
  <section class="secnd-section-section adoptFriend-margin">
      <div class="adob-second-section__container container">
        <p class="adob-second-section__text-small text-small">
          Найдите своего малыша
        </p>
        <p class="adob-second-section__text-big text-big">
          Эти животные готовы найти свой <span class="orange-word">дом</span>.
          <br />
          Здесь вы найдете своего лучшего друга, <br />
          который <span class="orange-word">ждет</span> именно вас.
        </p>
      </div>
      <hr class="secnd-section__line line">
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
