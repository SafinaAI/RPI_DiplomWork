import { createElement } from "../../framework/render.js";

function createAdoptFirstSecComponentTemplate() {
  return `<section class="adob-first-section">
      <div class="adob-first-section__container container">
        <!-- <img
      src="./src/img/try3.png"
      alt="фото фона"
      class="first-section__background-img"
      /> -->
        <div class="adob-first-section__background-img">
          <div class="adob-first-section__text-wrapper">
            <h2 class="adob-first-section__title text-big">
              Твой друг ждет тебя тут!
            </h2>
            <p class="adob-first-section__text text-small">
              Уже более 500 животных, нашли себе новых хозяев
            </p>
            <div class="adob-first-section__btns button">
              <button class="adob-first-section__btns-animals">
                Наши животные
              </button>
              <button class="adob-first-section__btns-donat">
                Пожертвовать
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  `;
}

export default class AdoptFirstSecComponent {
  getTemplate() {
    return createAdoptFirstSecComponentTemplate();
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
