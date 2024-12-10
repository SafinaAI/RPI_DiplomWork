import { createElement } from "../../framework/render.js";
import { loadPetsData } from "../../dataLoader.js";

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

function showPetInfoModal(pet) {
  // Создать контейнер модального окна
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <h2>${pet.title}</h2>
      <p><strong>Возраст:</strong> ${pet.age || "Не указан"}</p>
      <p><strong>Пол:</strong> ${pet.gender || "Не указан"}</p>
      <p><strong>Город:</strong> ${pet.city || "Не указан"}</p>
      <p>${pet.description || "Описание отсутствует."}</p>
      <button class="modal-contact-btn ">Связаться с приютом</button>
      <div class="modal-contact-info" style="display: none;">
        <p>Телефон: ${pet.phone || "Не указан"}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Обработчики закрытия
  const closeModal = () => modal.remove();
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Обработчик кнопки "Связаться с приютом"
  modal.querySelector(".modal-contact-btn").addEventListener("click", () => {
    const contactInfo = modal.querySelector(".modal-contact-info");
    contactInfo.style.display = "block";
  });
}

export default class AdoptSecondSecComponent {
  constructor() {
    this.petsData = [];
  }

  async init() {
    this.petsData = await loadPetsData();
    this.setupCardListeners();
    this.setupLearnMoreButton();
  }

  setupCardListeners() {
    const cards = document.querySelectorAll(
      ".adob-second-section__adob-box1-item"
    );
    cards.forEach((card, index) => {
      card.addEventListener("click", () =>
        showPetInfoModal(this.petsData[index])
      );
    });
  }

  setupLearnMoreButton() {
    const learnMoreButton = document.querySelector(".adob-second-section__btn");
    if (learnMoreButton) {
      learnMoreButton.addEventListener("click", () => {
        localStorage.setItem("petsData", JSON.stringify(this.petsData));
        window.location.href = "adoptYourFriend.html";
      });
    }
  }

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
