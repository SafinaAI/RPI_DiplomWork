import { createElement } from "../../framework/render.js";

function createThirdSecComponentTemplate() {
  return `<section class="third-section">
      <div class="third-section__container container">
        <!-- название секции Наша Миссия -->
        <p class="third-section__text-small text-small">Наша миссия</p>
        <!-- анатология к секции -->
        <p class="third-section__text-big text-big">
          Все питомцы заслуживают <span class="orange-word">любви</span>. <br />
          Мы помогаем им ее найти.
        </p>
        <!-- карточки описания Мисии -->
        <div class="third-section__cards-box">
          <!-- карточка 1 -->
          <div class="third-section__cards-item cards-item icons_cards-item">
            <img
              src="./src/icons/section3_icon1.svg"
              alt=""
              class="cards-item__icon"
            />
            <p class="cards-item__textOrange textOrange">
              1млн+ <br />
              домашних <br />
              животных
            </p>
            <p class="cards-item__textBlack textBlack">
              никогда не найдут любящий дом
            </p>
          </div>
          <!-- карточка 2 -->
          <div class="third-section__cards-item cards-item icons_cards-item">
            <img
              src="./src/icons/section3_icon2.svg"
              alt=""
              class="cards-item__icon"
            />
            <p class="cards-item__textOrange textOrange">Многие</p>
            <p class="cards-item__textBlack textBlack">
              Домашние питомцы подвергаются ненужной эвтаназии без доступной
              ветеринарной помощи
            </p>
          </div>
          <!-- карточка 3 -->
          <div class="third-section__cards-item cards-item icons_cards-item">
            <img
              src="./src/icons/section3_icon3.svg"
              alt=""
              class="cards-item__icon"
            />
            <p class="cards-item__textOrange textOrange">1 из 3</p>
            <p class="cards-item__textBlack textBlack">
              Домашних питомцев пропадают, и многие из них никогда не
              возвращаются домой
            </p>
          </div>
          <!-- карточка 4 -->
          <div class="third-section__cards-item cards-item icons_cards-item">
            <img
              src="./src/icons/section3_icon4.svg"
              alt=""
              class="cards-item__icon"
            />
            <p class="cards-item__textOrange textOrange">
              Бесчисленное <br />
              множество
            </p>
            <p class="cards-item__textBlack textBlack">
              приютов и организаций испытывают нехватку ресурсов
            </p>
          </div>
        </div>
        <hr class="secnd-section__line line" />
      </div>
    </section>

  `;
}

export default class ThirdSecComponent {
  getTemplate() {
    return createThirdSecComponentTemplate();
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
