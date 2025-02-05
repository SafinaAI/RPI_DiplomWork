import { createElement } from "../../framework/render.js";

function createCareSearchComponentTemplate() {
    return `
        <section class="searchSection">
      <div class="searchSection__container container">
        <div class="searchSection__wrapper">
          <h2 class="searchSection__title">
            Найдите того, кто подарит вашему хвостику заботу и любовь!
          </h2>
          <div class="searchSection__searchBoxContainer">
            <input
              type="text"
              class="searchSection__search-box"
              placeholder="Поиск специалиста ..."
              aria-label="Введите запрос для поиска специалиста"
            />
            <button class="searchSection__search-button" type="submit">
              <img src="./src/icons/dog-paw.svg" class="" alt="Лапка" />
            </button>
          </div>
          <div class="searchSection__quick-search">
            <a href="#" data-profession="врачи">Врачи</a>
            <a href="#" data-profession="кинологи">Кинологи</a>
            <a href="#" data-profession="грумеры">Грумеры</a>
            <a href="#" data-profession="передержка">Передержка</a>
            <a href="#" data-profession="догситтеры">Догситтеры</a>
          </div>
        </div>
      </div>
    </section>
    `;
}

export default class CareSearchComponent {
    getTemplate() {
        return createCareSearchComponentTemplate();
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