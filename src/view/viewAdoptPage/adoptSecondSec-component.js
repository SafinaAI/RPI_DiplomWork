import { createElement } from "../../framework/render.js";

function createAdoptSecondSecComponentTemplate() {
  return `<section class="adob-second-section">
      <div class="adob-second-section__container container">
        <p class="adob-second-section__text-small text-small">
          Найдите своего малыша
        </p>
        <p class="adob-second-section__text-big text-big">
          Эти животные готовы найти свой <span class="orange-word">дом</span>.
          <br />
          Здесь вы найдете своего лучшего друга, <br />
          который <span class="orange-word">ждет</span> именно вас.
        </p>
        <!-- <hr class="secnd-section__line line" /> -->
        <!-- карточки с животными, готовые к усыновлению -->
        <div class="adob-second-section__adob-cards-box1">
          <!-- карточка 1 -->
          <div class="adob-second-section__adob-box1-item adob-box1-item">
            <img
              src="./src/img/adopt_sec_2_photo1.jpg"
              alt="фото питомца 1"
              class="adob-box1-item__img"
            />
            <p class="adob-box1-item__pet-name textBlack">Буся</p>
            <p class="adob-box1-item__pet-age text-superSmall">
              Мальчик / 1год
            </p>
            <p class="adob-box1-item__pet-city text-superSmall">Казань</p>
          </div>
          <!-- карточка 2 -->
          <div class="adob-second-section__adob-box1-item adob-box1-item">
            <img
              src="./src/img/adopt_sec_2_photo2.jpg"
              alt="фото питомца 1"
              class="adob-box1-item__img"
            />
            <p class="adob-box1-item__pet-name textBlack">Алекс</p>
            <p class="adob-box1-item__pet-age text-superSmall">
              Мальчик / 1год
            </p>
            <p class="adob-box1-item__pet-city text-superSmall">Казань</p>
          </div>
          <!-- карточка 3 -->
          <div class="adob-second-section__adob-box1-item adob-box1-item">
            <img
              src="./src/img/adopt_sec_2_photo3.jpg"
              alt="фото питомца 1"
              class="adob-box1-item__img"
            />
            <p class="adob-box1-item__pet-name textBlack">Маруся</p>
            <p class="adob-box1-item__pet-age text-superSmall">
              Девочка / 1год
            </p>
            <p class="adob-box1-item__pet-city text-superSmall">Казань</p>
          </div>
          <!-- карточка 4 -->
          <div class="adob-second-section__adob-box1-item adob-box1-item">
            <img
              src="./src/img/adopt_sec_2_photo4.jpg"
              alt="фото питомца 1"
              class="adob-box1-item__img"
            />
            <p class="adob-box1-item__pet-name textBlack">Джиджи</p>
            <p class="adob-box1-item__pet-age text-superSmall">
              Девочка / 1год
            </p>
            <p class="adob-box1-item__pet-city text-superSmall">Казань</p>
          </div>
        </div>
        <button class="adob-second-section__btn button">Узнать больше</button>
        <hr class="adob-second-section__line line" />
      </div>
    </section>


  `;
}

export default class AdoptSecondSecComponent {
  getTemplate() {
    return createAdoptSecondSecComponentTemplate();
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
