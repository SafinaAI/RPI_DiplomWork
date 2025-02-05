import { createElement } from "../../framework/render.js";

function createCareFourthSecComponentTemplate() {
  return `
        <section class="fourthSec">
      <div class="fourthSec__container container">
        <div class="fourthSec__wrapper">
          <div class="fourthSec__wrap">
            <div class="fourthSec__leftWrap">
              <h3 class="fourthSec__title">
                Дарите <span class="orange-word">любовь</span> — становитесь
                другом для хвостиков!
              </h3>
              <img
                src="./src/img/LexVet_Care_кошка.png"
                alt=""
                class="fourthSec__img"
              />
            </div>
            <div class="fourthSec__rightWrap">
              <p class="fourthSec__text">
                Любите животных и хотите дарить им заботу? Присоединяйтесь к
                нашей тёплой команде специалистов! Расскажите о себе, своих
                услугах и находите новых пушистых друзей. Давайте вместе делать
                этот мир добрее —
                <span class="orange-word">лапка к лапке!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>  
    `;
}

export default class CareFourthSecComponent {
  getTemplate() {
    return createCareFourthSecComponentTemplate();
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
