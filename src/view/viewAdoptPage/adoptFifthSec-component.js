import { createElement } from "../../framework/render.js";

function createAdoptFifthSecComponentTemplate() {
  return `<section class="adob-fifth-section">
      <div class="adob-fifth-section__container container">
        <div class="adob-fifth-section__color-wrap">
          <!-- анатология к секции -->
          <p class="adob-fifth-section__text-small text-small">
            Любая сумма важна
          </p>
          <!-- описание секции -->
          <p class="adob-fifth-section__text-big text-big">
            Приютам не хватает денег на обеспечение всех питомцев. Вы можете
            подарить <span class="orange-word">любовь</span> хвостикам,
            пожертвовав любую сумму любому приюту.
          </p>

        </div>
        <p class="adob-fifth-section__text-descript text-small">
          Деньги с пожертвований пойдут на
        </p>
        <!-- карточки описания способов помощи -->
        <div class="adob-fifth-section__adob-cards-box4">
          <!-- карточка 1 -->
          <div
            class="adob-fifth-section__adob-box4-item adob-box4-item icons_cards-item"
          >
            <img
              src="./src/icons/adob_sec_4_icon1.svg"
              alt="Картинка Покупка корма и инвентаря"
              class="adob-box4-item__icon"
            />
            <p class="adob-box4-item__textOrange textOrange">
              Покупку корма и инвентаря
            </p>
            <p class="adob-box4-item__textBlack textBlack">
              Приютам необходимо покупать много корма для питомцев. Помимо
              этого, они нуждаются в обновлении инвентаря и амуниции (ведра,
              швабры, лежанки, когтеточки). <br />
              Ваши пожертвования помогут вовремя обновлять инвентарь.
            </p>
          </div>
          <!-- карточка 2 -->
          <div
            class="adob-fifth-section__adob-box4-item adob-box4-item icons_cards-item"
          >
            <img
              src="./src/icons/adob_sec_4_icon2.svg"
              alt="Картинка Покупка лекарств"
              class="adob-box4-item__icon"
            />
            <p class="adob-box4-item__textOrange textOrange">
              Покупку лекарств и вакцин
            </p>
            <p class="adob-box4-item__textBlack textBlack">
              Все животные в приютах нуждаются в обработке от гельминтов и
              клещей. Так же многим пожизненно необходимы лекарства. <br />
              Вы можете помочь приютам приобрести необходимые медикаменты.
            </p>
          </div>
          <!-- карточка 3 -->
          <div
            class="adob-fifth-section__adob-box4-item adob-box4-item icons_cards-item"
          >
            <img
              src="./src/icons/adob_sec_4_icon3.svg"
              alt="Картинка Лечение животных"
              class="adob-box4-item__icon"
            />
            <p class="adob-box4-item__textOrange textOrange">
              Лечение животных
            </p>
            <p class="adob-box4-item__textBlack textBlack">
              В приютах живет много животных. Очень многим требуется лечение в
              вет.клиниках. <br />
              Ваше пожертвование может спасти жизнь!
            </p>
          </div>
          <!-- карточка 4 -->
          <div
            class="adob-fifth-section__adob-box4-item adob-box4-item icons_cards-item"
          >
            <img
              src="./src/icons/adob_sec_4_icon4.svg"
              alt="Картинка улучшение условий жизни"
              class="adob-box4-item__icon"
            />
            <p class="adob-box4-item__textOrange textOrange">
              Улучшение условий жизни
            </p>
            <p class="adob-box4-item__textBlack textBlack">
              Многим приютам нужны средства, чтобы починить или утеплить
              вольеры, поменять полы, закупиться новым оборудованием и
              игрушками. <br />
              Ваше пожертвование поможет приютам купить необходимые материалы и
              подготовиться к знойному лету или холодной зиме.
            </p>
          </div>
        </div>
        <button class="adob-fifth-section__btn button">Пожертовать</button>
      </div>
      <hr class="adob-fifth-section__line line" />
    </section>

  `;
}

export default class AdoptFifthSecComponent {
  getTemplate() {
    return createAdoptFifthSecComponentTemplate();
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
