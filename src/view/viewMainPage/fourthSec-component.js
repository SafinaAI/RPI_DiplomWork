import { createElement } from "../../framework/render.js";

function createFourthSecComponentTemplate() {
  return `<section class="fourth-section">
      <div class="fourth-section__container container">
        <p class="fourth-section__text-small text-small">Наши решения</p>
        <!-- анатология к секции -->
        <p class="fourth-section__text-big text-big">
          Вместе высвобождаем <br />
          силу <span class="orange-word">любви</span>
        </p>
        <!-- карточки описания Мисии -->
        <div class="fourth-section__cards-box2">
          <!-- карточка 1 -->
          <div class="fourth-section__box2-item box2-item">
            <img
              class="box2-item__img"
              src="./src/img/section4_img1.png"
              alt="Усыновите питомца"
            />
            <!-- враппер для текста карточки, чтобы текст равнялся по левому краю -->
            <div class="box2-item__wrapper-text">
              <p class="box2-item__text-superSmall text-superSmall">
                Создание семьи
              </p>
              <p class="box2-item__textOrange textOrange">
                LexVet - Усыновление
              </p>
              <p class="box2-item__textBlack textBlack">
                Возьмите себе питомца. Увеличьте свою семью. Наполните свой дом
                любовью. С LexVet - усыновление легко найти друга по душе
              </p>
              <button class="box2-item__btn button" id="adopt-button">
                Посетите LexVet Усыновление
              </button>
            </div>
          </div>
          <!-- карточка 2 -->
          <div class="fourth-section__box2-item box2-item">
            <img
              class="box2-item__img"
              src="./src/img/section_4_img2.png"
              alt="Найти пропавшего питомца"
            />
            <!-- враппер для текста карточки, чтобы текст равнялся по левому краю -->
            <div class="box2-item__wrapper-text">
              <p class="box2-item__text-superSmall text-superSmall">
                Воссоединение домашних животных
              </p>
              <p class="box2-item__textOrange textOrange">LexVet - Поиск</p>
              <p class="box2-item__textBlack textBlack">
                Помогите воссоединить потерянных и найденных питомцев с их
                хозяевами. Выложив геопозицию на карту поиска или сделав
                фотографию и загрузив ее на LexVet Lost
                <!-- , или зарегистрируйте
                своего питомца на случай, если он когда-нибудь пропадет. Это
                бесплатно! -->
              </p>
              <button class="box2-item__btn button" id="search-button">
                Посетите LexVet Поиск
              </button>
            </div>
          </div>
          <!-- карточка 3 -->
          <div class="fourth-section__box2-item box2-item">
            <img
              class="box2-item__img"
              src="./src/img/section4_img3.png"
              alt="Только проверенные услуги для питомца"
            />
            <!-- враппер для текста карточки, чтобы текст равнялся по левому краю -->
            <div class="box2-item__wrapper-text">
              <p class="box2-item__text-superSmall text-superSmall">
                Проверенные услуги
              </p>
              <p class="box2-item__textOrange textOrange">LexVet - Забота</p>
              <p class="box2-item__textBlack textBlack">
                Нанимайте только проверенных догситтеров, ходите только к
                профессиональным грумерам и посещайте только хорошие ветклиники.
                С LexVet Care ваш питомец будет окружен заботой и вниманием
              </p>
              <button class="box2-item__btn button" id="care-button">
                Посетите LexVet Забота
              </button>
            </div>
          </div>
        </div>
        <hr class="secnd-section__line line" />
      </div>
    </section>

  `;
}

export default class FourthSecComponent {
  getTemplate() {
    return createFourthSecComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
      this.addEventListeners(); // Добавляем обработчики событий
    }
    return this.element;
  }

  addEventListeners() {
    const adoptButton = this.element.querySelector("#adopt-button");
    const searchButton = this.element.querySelector("#search-button");
    const careButton = this.element.querySelector("#care-button");

    adoptButton.addEventListener("click", () => {
      window.location.href = "LexVetAdopt.html";
    });

    searchButton.addEventListener("click", () => {
      window.location.href = "LexVetSearch.html";
    });

    careButton.addEventListener("click", () => {
      window.location.href = "LexVetCare.html";
    });
  }

  removeElement() {
    this.element = null;
  }
}
