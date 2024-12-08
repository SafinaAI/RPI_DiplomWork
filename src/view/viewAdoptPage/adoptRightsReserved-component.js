import { createElement } from "../../framework/render.js";

function createAdoptRightReservedComponentTemplate() {
  return `<section class="ninth-section">
      <div class="ninth-section__container container">
        <div class="ninth-section__greyLine"></div>
        <div class="ninth-section__wrapper">
          <p class="ninth-section__left-text text-superSmall">
            Использование этого сервиса, веб-сайта или приложения означает
            принятие всех условий, перечисленных выше. LexVet и связанные с ним
            логотипы являются товарными знаками LexVet Animal Supplies,
            Inc.™ 2024 , LexVet Love | LexVet Animal Supplies, Inc. Все права
            защищены.
          </p>
          <div class="ninth-section__right-text right-text">
            <p class="right-text__privacyPolicy text-superSmall">
              Политика конфиденциальности 
            </p>
            <div class="right-text__line demarcationLine"></div>

            <p class="right-text__termsOfService text-superSmall">
              Условия обслуживания
            </p>
          </div>
        </div>
      </div>
    </section>

  `;
}

export default class AdoptRightReservedComponent {
  getTemplate() {
    return createAdoptRightReservedComponentTemplate();
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
