import { createElement } from "../../framework/render.js";

function createSixthSecComponentTemplate() {
  return `
        <section class="sixth-section">
      <div class="sixth-section__container container">
        <p class="sixth-section__text-small text-small">Наши голоса</p>
        <!-- анатология к секции -->
        <p class="sixth-section__text-big text-big">
          <span class="orange-word">Счастливые</span> истории наших <br />
          подписчиков
        </p>
        <!-- карточки описания Отзывов -->
        <div class="sixth-section__cards-box4" >
          <!-- <div class="sixth-section__left-arrow">
            <img src="./src/icons/arrow_left.svg" alt="" />
          </div> -->
          <!-- карточка 1 -->
          <div class="sixth-section__box4-item box4-item" data-id="1">
            <img
              class="box4-item__img"
              src="./src/img/секция_6_фото_1.png"
              alt="История владельца 1"
            />
            <p class="box4-item__text-title textBlack">Алия и Барки</p>
            <div class="box4-item__wrapper-textInfo">
              <p class="box4-item__text-info textBlack">
                Мой малыш пропал во время прогулки. Я боялась, что больше
                никогда не увижу его. Но многочисленные пользователь LexVet Lost
                .....
              </p>
            </div>
            <button class="box4-item__btn button">Читать</button>
          </div>
          <!-- карточка 2 -->
          <div class="sixth-section__box4-item box4-item" data-id="2">
            <img
              class="box4-item__img"
              src="./src/img/секция_6_фото_2.png"
              alt="История владельца 2"
            />
            <p class="box4-item__text-title textBlack">Иван и Лекси</p>
            <div class="box4-item__wrapper-textInfo">
              <p class="box4-item__text-info textBlack">
                моя собака пропала во время прогулки в парке. Он далеко убежал
                от меняБ испугавшись детей, я не смог его догнать. Я искал его 3
                дня, пока соседи не рассказали мне о LexVet Поиск. Без всяких
                надежд я зарегистрировался на платформе и внес все необходимые
                данные. И уже вечером мне поступил звонок о ...
              </p>
            </div>
            <button class="box4-item__btn button">Читать</button>
          </div>
          <!-- карточка 3 -->
          <div class="sixth-section__box4-item box4-item" data-id="3">
            <img
              class="box4-item__img"
              src="./src/img/секция_6_фото_3.png"
              alt="История владельца 3"
            />
            <p class="box4-item__text-title textBlack">Мария и Пушок</p>
            <div class="box4-item__wrapper-textInfo">
              <p class="box4-item__text-info textBlack">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores pariatur, eligendi earum iste nemo rerum nesciunt
                provident cum corporis non. Vitae minima sapiente vero nemo
                culpa eveniet eos ipsa totam deleniti? Laborum assumenda, enim
                mollitia numquam tempora et vero repellendus ducimus harum
                exercitationem suscipit a ratione minima. Dolorem aut asperiores
                odit voluptate cumque enim et. Similique neque minus molestias,
                asperiores pariatur laudantium doloribus nostrum. Nam, dicta
                aperiam. Eos, aliquid. Laborum.
              </p>
            </div>
            <button class="box4-item__btn button">Читать</button>
          </div>
        </div>
        <!-- Кнопка для перехода -->
        <button class="sixth-section__but button" id="read-more-button">
          Читать больше
        </button>
      </div>
    </section>
  `;
}

export default class SixthSecComponent {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createSixthSecComponentTemplate();
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
    const cardButtons = this.element.querySelectorAll(".box4-item__btn");

    cardButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const cardElement = event.target.closest(".box4-item"); // Находим родительский элемент с `data-id`
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
