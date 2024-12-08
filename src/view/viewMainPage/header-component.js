import { createElement } from "../../framework/render.js";

function createHeaderComponentTemplate() {
  return `<header class="section-header">
      <!-------------------------------------->
      <!-------------------------------------->
      <!-- Верхняя часть навигации ( гавигация по продуктам) -->
      <div class="section-header__firstNav firstNav firstNav__container">
        <ul class="firstNav__list">
          <li class="firstNav__list-item">
            <a href="./LexVetAdopt.html"> LexVet Усыновление</a>
          </li>
          <div class="firstNav__hr demarcationLine"></div>
          <li class="firstNav__list-item">
            <a href="#">LexVet Поиск</a>
          </li>
          <div class="firstNav__hr demarcationLine"></div>
          <li class="firstNav__list-item">
            <a href="#">LexVet Забота</a>
          </li>
        </ul>
      </div>

      <!-------------------------------------->
      <!-------------------------------------->
      <!-- Основное меню по странице -->
      <div class="section-header__container container">
        <!-- Лого меню -->
        <a class="section-header__logo-link" href="./index.html">
          <img
            src="./src/icons/LOGO.svg"
            alt="Logo"
            class="section-header__logo"
          />
        </a>
        <!-- Блок меню -->
        <nav class="section-header__nav nav-menu">
          <ul class="nav-menu__list">
            <li class="nav-menu__list-item">
              <a href="#">Кто мы</a>
            </li>
            <li class="nav-menu__list-item">
              <a href="#">Что мы делаем</a>
            </li>
          </ul>
        </nav>
        <!-- Блок кнопок в меню -->
        <div class="section-header__btns buttons">
          <button class="buttons__LogIn">Регистрация</button>
          <button class="buttons__LogUp">Поддержать</button>
        </div>
      </div>
    </header>
`;
}

export default class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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
