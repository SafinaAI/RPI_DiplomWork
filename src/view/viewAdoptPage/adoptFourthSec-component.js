import { createElement } from "../../framework/render.js";

function createAdoptFourthSecComponentTemplate() {
  return ` <section class="adob-fourth-section">
      <div class="adob-fourth-section__container container">
        <!-- анатология к секции -->
        <p class="adob-fourth-section__text-big text-big">
          <span class="orange-word">Счастливые</span> истории наших <br />
          подписчиков
        </p>
        <!-- карточки описания Отзывов -->
        <div class="adob-fourth-section__adob-cards-box3">
          <div class="adob-fourth-section__adob-box3-item adob-box3-item " data-id="10">
            <img
              class="adob-box3-item__img"
              src="./src/img/adob_fourth_section_card1.jfif"
              alt="История владельца 1"
            />
            <p class="adob-box3-item__text-title textBlack">Таня и Мася</p>
            <div class="adob-box3-item__wrapper-textInfo">
              <p class="adob-box3-item__text-info textBlack">
                Только сейчас я поняла, что такое иметь верного друга в доме.
              </p>
            </div>
            <button class="adob-box3-item__btn button">Читать</button>
          </div>
          <!-- карточка 2 -->
          <div class="adob-fourth-section__adob-box3-item adob-box3-item" data-id="11">
            <img
              class="adob-box3-item__img"
              src="./src/img/adob_fourth_section_card2.jfif"
              alt="История владельца 2"
            />
            <p class="adob-box3-item__text-title textBlack">Том и Бакс</p>
            <div class="adob-box3-item__wrapper-textInfo">
              <p class="adob-box3-item__text-info textBlack">
                Я давно хотел взять себе друга. В приюте было много собак, но он
                был особенным. Теперь я самый счастливый человек.
              </p>
            </div>
            <button class="adob-box3-item__btn button">Читать</button>
          </div>
          <!-- карточка 3 -->
          <div class="adob-fourth-section__adob-box3-item adob-box3-item" data-id="12">
            <img
              class="adob-box3-item__img"
              src="./src/img/adob_fourth_section_card3.jfif"
              alt="История владельца 3"
            />
            <p class="adob-box3-item__text-title textBlack">Анастасия и Бам</p>
            <div class="adob-box3-item__wrapper-textInfo">
              <p class="adob-box3-item__text-info textBlack">
                Как только я его увидела в приюте, сразу поняла, что он будет
                жить у меня. Это самый лучший пес на свете.
              </p>
            </div>
            <button class="adob-box3-item__btn button">Читать</button>
          </div>
        </div>
        <div class="adob-fourth-section__dots"></div>
        <button class="adob-fourth-section__btn button" id="read-more-button">Узнать больше</button>
        <hr class="adob-fourth-section__line line" />
      </div>
    </section>

  `;
}

export default class AdoptFourthSecComponent {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createAdoptFourthSecComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
      this.#setEventListeners();
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }

  #setEventListeners() {
    // Обработчик для кнопки "Читать больше"
    const readMoreButton = this.element.querySelector("#read-more-button");
    readMoreButton.addEventListener("click", () => {
      window.location.href = "./readMoreStorys.html";
    });

    // Обработчики для кнопок в карточках
    const cardButtons = this.element.querySelectorAll(".adob-box3-item__btn");

    cardButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const cardElement = event.target.closest(".adob-box3-item"); // Находим родительский элемент с `data-id`
        const storyId = cardElement.dataset.id; // Получаем id из data-id
        console.log(`Идентификатор истории: ${storyId}`); // Логируем id для проверки

        // Проверка, что storyId определен
        if (storyId) {
          window.location.href = `./readMoreStorys.html?id=${storyId}`;
        } else {
          console.error("Ошибка: Идентификатор истории не найден.");
        }
      });
    });
  }
}
