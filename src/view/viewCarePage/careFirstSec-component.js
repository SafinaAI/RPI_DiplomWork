import { createElement } from "../../framework/render.js";

function createCareFirstSecComponentTemplate() {
    return `
    <section class="firstSec">
      <div class="firstSec__container container">
        <div class="leftWrapper">
          <h1 class="leftWrapper__title">
            Любимым хвостикам только проверенные специалисты!
          </h1>
          <h2 class="leftWrapper__text">
            Мы за то, чтобы животные получали качественные услуги
          </h2>
          <div class="leftWrapper__btn button">
            <button class="leftWrapper__btn-searchProf">
              Найти специалиста
            </button>
            <button class="leftWrapper__btn-loadService">
              Выложить услугу
            </button>
          </div>
        </div>
        <div class="rightWrapper">
          <img
            src="./src/img/carePageDog.png"
            alt="Фото_собаки"
            class="rightWrapper__img"
          />
        </div>
      </div>
    </section>
    `;
}

export default class CareFirstSecComponent {
    getTemplate() {
        return createCareFirstSecComponentTemplate();
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