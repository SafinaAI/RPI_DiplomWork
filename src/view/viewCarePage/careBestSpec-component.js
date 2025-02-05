import { createElement } from "../../framework/render.js";

function createCareBestSpecComponentTemplate() {
  return `
        <section class="bestSpec">
      <div class="bestSpec__container container">
        <div class="bestSpec__wrapper">
          <h2 class="bestSpec__title">
            Лучшие из лучших — проверено <br />
            <span class="orange-word">любовью</span>!
          </h2>
          <div class="bestSpec__cards">
            <!-- карточка 1 -->
            <div class="bestSpec__card">
              <!-- добавлением атрибута loading="lazy" для ускорения загрузки 
               страницы и улучшения производительности. -->
              <img
                loading="lazy"
                src="./src/img/груммер1 1.png"
                alt="Специалист 1"
                class="bestSpec__cardImg"
              />
              <h3 class="bestSpec__cardName">Груммер Таня</h3>
              <div class="bestSpec__cardRating">
                <span>★★★★★</span>
              </div>
              <p class="bestSpec__cardReviews">150 отзывов</p>
            </div>
            <!-- карточка 2 -->
            <div class="bestSpec__card">
              <img
                loading="lazy"
                src="./src/img/груммер2.png"
                alt="Специалист 2"
                class="bestSpec__cardImg"
              />
              <h3 class="bestSpec__cardName">Груммер Катя</h3>
              <div class="bestSpec__cardRating">
                <span>★★★★★</span>
              </div>
              <p class="bestSpec__cardReviews">120 отзывов</p>
            </div>
            <!-- карточка 3 -->
            <div class="bestSpec__card">
              <img
                loading="lazy"
                src="./src/img/груммер3.png"
                alt="Специалист 3"
                class="bestSpec__cardImg"
              />
              <h3 class="bestSpec__cardName">Груммер Валерия</h3>
              <div class="bestSpec__cardRating">
                <span>★★★★★</span>
              </div>
              <p class="bestSpec__cardReviews">100 отзывов</p>
            </div>
            <!-- карточка 4 -->
            <div class="bestSpec__card">
              <img
                loading="lazy"
                src="./src/img/ветврач1.png"
                alt="Специалист 4"
                class="bestSpec__cardImg"
              />
              <h3 class="bestSpec__cardName">Хирург Иван</h3>
              <div class="bestSpec__cardRating">
                <span>★★★★★</span>
              </div>
              <p class="bestSpec__cardReviews">90 отзывов</p>
            </div>
            <!-- карточка 5 -->
            <div class="bestSpec__card">
              <img
                loading="lazy"
                src="./src/img/ветврач2.png"
                alt="Специалист 5"
                class="bestSpec__cardImg"
              />
              <h3 class="bestSpec__cardName">Ортопед Дмитрий</h3>
              <div class="bestSpec__cardRating">
                <span>★★★★★</span>
              </div>
              <p class="bestSpec__cardReviews">85 отзывов</p>
            </div>
            <!-- карточка 6 -->
            <div class="bestSpec__card">
              <img
                loading="lazy"
                src="./src/img/ветврач3.png"
                alt="Специалист 6"
                class="bestSpec__cardImg"
              />
              <h3 class="bestSpec__cardName">Терапевт Денис</h3>
              <div class="bestSpec__cardRating">
                <span>★★★★★</span>
              </div>
              <p class="bestSpec__cardReviews">105 отзывов</p>
            </div>
            <!-- карточка 7 -->
            <div class="bestSpec__card">
              <img
                loading="lazy"
                src="./src/img/груммер1 1.png"
                alt="Специалист 7"
                class="bestSpec__cardImg"
              />
              <h3 class="bestSpec__cardName">Догситтер Аня</h3>
              <div class="bestSpec__cardRating">
                <span>★★★★★</span>
              </div>
              <p class="bestSpec__cardReviews">113 отзывов</p>
            </div>
            <!-- карточка 8 -->
            <div class="bestSpec__card">
              <img
                loading="lazy"
                src="./src/img/груммер1 1.png"
                alt="Специалист 8"
                class="bestSpec__cardImg"
              />
              <h3 class="bestSpec__cardName">Диетолог Василий</h3>
              <div class="bestSpec__cardRating">
                <span>★★★★★</span>
              </div>
              <p class="bestSpec__cardReviews">98 отзывов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    `;
}

export default class CareBestSpecComponent {
  getTemplate() {
    return createCareBestSpecComponentTemplate();
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
