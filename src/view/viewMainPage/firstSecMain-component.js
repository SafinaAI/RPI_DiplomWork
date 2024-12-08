import { createElement } from "../../framework/render.js";

function createFirstSecMainComponentTemplate() {
  return `<section class="main-section">
      <div class="main-section__container container">
        <!-- левая часть (фото собаки) -->
        <div class="left-wrapper">
          <img
            src="./src/img/dog1.png"
            alt="Фото собачки"
            class="left-wrapper__img"
          />
        </div>
        <!-- правая часть (информация) -->
        <div class="right-wrapper">
          <h1 class="right-wrapper__title title">
            AlexVet главный помощник четвероногих друзей
          </h1>
          <p class="right-wrapper__text">
            Мы помогаем вернуть потерянных животных домой благодаря удобной
            карте поиска. Мы поддерживаем приюты, чтобы каждая собака и кошка
            нашли свою семью. Получайте полезные советы по уходу за питомцами и
            находите специалистов в нашей платформе. <br /><br />
            Присоединяйтесь к нам и подарите любовь четвероногим друзьям!
          </p>
        </div>
      </div>
    </section>
  `;
}

export default class FirstSecMainComponent {
  getTemplate() {
    return createFirstSecMainComponentTemplate();
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
