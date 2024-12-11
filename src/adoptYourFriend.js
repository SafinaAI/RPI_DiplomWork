import { loadPetsData } from "./dataLoader.js";
import AdoptYourFriendHeaderComponent from "./view/adoptYourFriendPage/adoptFriendHeader-componnt.js";
import AdoptFriendTextComponent from "./view/adoptYourFriendPage/adoptFriendText-component.js";
import AdoptFriendTitleComponent from "./view/adoptYourFriendPage/adoptFriendTitle-component.js";
import AdoptFriendFooterComponent from "./view/adoptYourFriendPage/adoptFriendFooter-component.js";
import AdoptFriendRightReservedComponent from "./view/adoptYourFriendPage/adoptFriendRightsReserved-component.js";
import { render, RenderPosition } from "./framework/render.js";

const bodyContainer = document.querySelector(".adoptYourFriend-app");

render(new AdoptYourFriendHeaderComponent(), bodyContainer);
render(new AdoptFriendTextComponent(), bodyContainer);
render(new AdoptFriendTitleComponent(), bodyContainer);

// Создаем контейнер для карточек
const cardsContainer = document.createElement("div");
cardsContainer.className = "adopt-cards-container container";
bodyContainer.appendChild(cardsContainer);

// Загружаем данные с MockAPI
document.addEventListener("DOMContentLoaded", async () => {
  const petsData = await loadPetsData();

  if (petsData.length === 0) {
    console.error("Данные о питомцах отсутствуют!");
    return;
  }

  cardsContainer.innerHTML = petsData
    .map(
      (pet) => `
        <div class="adopt-card">
          <img src="${pet.image}" alt="${pet.title}" class="adopt-card__img" />
          <h3 class="adopt-card__title text-black">${pet.title}</h3>
          <p class="adopt-card__details textBlack">${pet.gender} / ${pet.age} / ${pet.city}</p>
          <p class="adopt-card__description textBlack">${pet.description}</p>
          <button class="adopt-card__contact-btn button">Связаться с приютом</button>
        </div>
      `
    )
    .join("");

  // Обработчик для кнопок
  cardsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("adopt-card__contact-btn")) {
      const card = event.target.closest(".adopt-card");
      const petName = card.querySelector(".adopt-card__title").textContent;
      alert(`Связаться с приютом по поводу: ${petName}`);
    }
  });
});

render(new AdoptFriendFooterComponent(), bodyContainer);
render(new AdoptFriendRightReservedComponent(), bodyContainer);





