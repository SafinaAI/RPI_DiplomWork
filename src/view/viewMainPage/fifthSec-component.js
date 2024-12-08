import { createElement } from "../../framework/render.js";

function createFifthSecComponentTemplate() {
  return `<section class="fifth-section">
      <div class="fifth-section__container container">
        <p class="fifth-section__text-small text-small">Наши достижения</p>
        <!-- карточки описания Достижений -->
        <div class="fifth-section__cards-box3">
          <!-- карточка 1 -->
          <div class="fifth-section__box3-item box3-item icons_cards-item">
            <img
              src="./src/icons/section3_icon1.svg"
              alt=""
              class="box3-item__icon"
            />
            <!-- текст внутри карточки -->
            <p class="box3-item__textMix">
              <span class="orange-word">Более 500</span><br />
              животных <br />
              обрели свой <br />
              дом
            </p>
          </div>
          <!-- карточка 2 -->
          <div class="fifth-section__box3-item box3-item icons_cards-item">
            <img
              src="./src/icons/section3_icon2.svg"
              alt=""
              class="box3-item__icon"
            />
            <!-- текст внутри карточки -->
            <p class="box3-item__textMix">
              <span class="orange-word">100+ животных</span><br />
              спасены от <br />
              эвтаназии
            </p>
          </div>
          <!-- карточка 3 -->
          <div class="fifth-section__box3-item box3-item icons_cards-item">
            <img
              src="./src/icons/section3_icon3.svg"
              alt=""
              class="box3-item__icon"
            />
            <!-- текст внутри карточки -->
            <p class="box3-item__textMix">
              <span class="orange-word">1т+ животных</span><br />
              вернулись <br />
              домой
            </p>
          </div>
          <!-- карточка 4 -->
          <div class="fifth-section__box3-item box3-item icons_cards-item">
            <img
              src="./src/icons/section3_icon4.svg"
              alt=""
              class="box3-item__icon"
            />
            <!-- текст внутри карточки -->
            <p class="box3-item__textMix">
              <span class="orange-word">Более 2млн</span><br />
              пожертвований
            </p>
          </div>
        </div>
      </div>
    </section>

  `;
}

export default class FifthSecComponent {
  getTemplate() {
    return createFifthSecComponentTemplate();
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
