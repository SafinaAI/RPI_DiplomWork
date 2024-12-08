import { createElement } from "../../framework/render.js";

function createAdoptThirdSecComponentTemplate() {
  return `<section class="adob-third-section">
      <div class="adob-third-section__container container">
        <p class="adob-third-section__text-small text-small">
          Они нуждаются в вашей помощи
        </p>
        <p class="adob-third-section__text-big text-big">
          Эти животные находятся на лечении. <br />
          Вы можете внести свой вклад в их скорейшее выздоровление,<span
            class="orange-word"
            >пожертвовав любую сумму</span
          >.
        </p>
        <!-- карточки с животными, готовые к усыновлению -->
        <div class="adob-third-section__adob-cards-box2">
          <!-- карточка 1 -->
          <div class="adob-third-section__adob-box2-item adob-box2-item">
            <img
              src="./src/img/adob_third_section_cart1.jfif"
              alt="фото питомца 1"
              class="adob-box2-item__img"
            />
            <p class="adob-box2-item__pet-name textBlack">Буся</p>
            <p class="adob-box2-item__pet-age text-superSmall">
              Мальчик / 1год
            </p>
            <p class="adob-box2-item__pet-city text-superSmall">Казань</p>
            <button class="adob-box2-item__pet-btn button">Пожертвовать</button>
          </div>
          <!-- карточка 2 -->
          <div class="adob-third-section__adob-box2-item adob-box2-item">
            <img
              src="./src/img/adob_third_section_cart2.jfif"
              alt="фото питомца 2"
              class="adob-box2-item__img"
            />
            <p class="adob-box2-item__pet-name textBlack">Алекс</p>
            <p class="adob-box2-item__pet-age text-superSmall">
              Мальчик / 1год
            </p>
            <p class="adob-box2-item__pet-city text-superSmall">Казань</p>
            <button class="adob-box2-item__pet-btn button">Пожертвовать</button>
          </div>
          <!-- карточка 3 -->
          <div class="adob-third-section__adob-box2-item adob-box2-item">
            <img
              src="./src/img/adob_third_section_cart3.jfif"
              alt="фото питомца 3"
              class="adob-box2-item__img"
            />
            <p class="adob-box2-item__pet-name textBlack">Маруся</p>
            <p class="adob-box2-item__pet-age text-superSmall">
              Девочка / 1год
            </p>
            <p class="adob-box2-item__pet-city text-superSmall">Казань</p>
            <button class="adob-box2-item__pet-btn button">Пожертвовать</button>
          </div>
          <!-- карточка 4 -->
          <div class="adob-third-section__adob-box2-item adob-box2-item">
            <img
              src="./src/img/adob_third_section_cart4.jfif"
              alt="фото питомца 4"
              class="adob-box2-item__img"
            />
            <p class="adob-box2-item__pet-name textBlack">Джиджи</p>
            <p class="adob-box2-item__pet-age text-superSmall">
              Девочка / 1год
            </p>
            <p class="adob-box2-item__pet-city text-superSmall">Казань</p>
            <button class="adob-box2-item__pet-btn button">Пожертвовать</button>
          </div>
        </div>
        <button class="adob-third-section__btn button">Узнать больше</button>
        <hr class="adob-third-section__line line" />
      </div>
    </section>

  `;
}

export default class AdoptThirdSecComponent {
  getTemplate() {
    return createAdoptThirdSecComponentTemplate();
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
