import { createElement } from "../../framework/render.js";

function createCareEmailSecComponentTemplate() {
  return `
        <section class="seventh-section">
      <div class="seventh-section__container container">
        <!-- wrapper для того чтобы flex раскинул текст и форму -->
        <div class="seventh-section__wrapper">
          <p class="seventh-section__text text-middle">
            Получайте <span class="orange-word">Любовь</span> на свой<br />
            почтовый ящик
          </p>
          <!-- Форма для почты -->
          <div
            class="seventh-section__subscription-form-container subscription-form"
          >
            <form
              class="seventh-section__subscription-form subscription-form__formEmail"
              action="#"
              method="post"
            >
              <!-- Поле для строчки "Веддите эмаил" -->
              <input
                type="email"
                name="userEmail"
                placeholder="Enter your email"
                required
              />
              <!-- Кнопка отправки емаила -->
              <input type="submit" name="submit" value="Subscribe" />
            </form>
            <!-- Иконки соц-сетей -->
            <ul class="seventh-section__icons-box icons-box">
              <li class="icons-box__item">
                <img src="./src/icons/facebook.svg" alt="facebook" />
              </li>
              <li class="icons-box__item">
                <img src="./src/icons/instagramm.svg" alt="instagramm" />
              </li>
              <li class="icons-box__item">
                <img src="./src/icons/telegramm.svg" alt="telegramm" />
              </li>
              <li class="icons-box__item">
                <img src="./src/icons/vk.svg" alt="vk" />
              </li>
              <li class="icons-box__item">
                <img src="./src/icons/youtube.svg" alt="youtube" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    `;
}

export default class CareEmailSecComponent {
  getTemplate() {
    return createCareEmailSecComponentTemplate();
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
