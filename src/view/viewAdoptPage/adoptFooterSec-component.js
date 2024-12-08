import { createElement } from "../../framework/render.js";

function createAdoptFooterSecComponentTemplate() {
  return `<footer class="footer-section">
      <div class="footer-section__container container">
        <div class="footer-section__orangeLine"></div>
        <!-- wrapper для того чтобы все последующие дивы можно было разделить флексом -->
        <div class="footer-section__wrapper">
          <div class="footer-section__fotter-item fotter-item">
            <img
              src="./src/icons/LOGO.svg"
              alt="LexVet Лого"
              class="fotter-item__logo"
            />
          </div>
          <!--  -->
          <!-- СТОЛБЕЦ 1 - О НАС -->
          <div class="footer-section__fotter-item fotter-item">
            <p class="fotter-item__title textOrange">О НАС</p>
            <ul class="fotter-item__list footer-list">
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> Кто мы </a>
              </li>
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> Что мы делаем </a>
              </li>
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> Финансы </a>
              </li>
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> Наши партнеры </a>
              </li>
            </ul>
          </div>

          <!-- СТОЛБЕЦ 2 - НАША СЕМЬЯ -->
          <div class="footer-section__fotter-item fotter-item">
            <p class="fotter-item__title textOrange">НАША СЕМЬЯ</p>
            <ul class="fotter-item__list footer-list">
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> LexVet Усыновление </a>
              </li>
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> LexVet Поиск </a>
              </li>
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> LexVet Забота </a>
              </li>
            </ul>
          </div>

          <!-- СТОЛБЕЦ 3 - ПАРТНЕРЫ -->
          <div class="footer-section__fotter-item fotter-item">
            <p class="fotter-item__title textOrange">ПАРТНЕРЫ</p>
            <ul class="fotter-item__list footer-list">
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> RoyalConin </a>
              </li>
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> Кот и Пес </a>
              </li>
            </ul>
          </div>

          <!-- СТОЛБЕЦ 4 - БОЛЬШЕ -->
          <div class="footer-section__fotter-item fotter-item">
            <p class="fotter-item__title textOrange">БОЛЬШЕ</p>
            <ul class="fotter-item__list footer-list">
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> Поддержка </a>
              </li>
              <li class="footer-list__item">
                <a class="footer-list__link" href="#"> Pr - отдел </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  `;
}

export default class AdoptFooterSecComponent {
  getTemplate() {
    return createAdoptFooterSecComponentTemplate();
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
