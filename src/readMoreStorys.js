import { loadStoriesData } from "./dataLoader.js";
import ReadStorysHeaderComponent from "./view/readMoreStorysPage/readStorysHeader-component.js";
import ReadStorysTitleComponent from "./view/readMoreStorysPage/readStorysTitle-component.js";
import ReadStorysFooterComponent from "./view/readMoreStorysPage/readStorysFooter-component.js";
import ReadStorysRightReservedComponent from "./view/readMoreStorysPage/readStoryRightsReserved-component.js";
import ReadStorysMainComponent from "./view/readMoreStorysPage/readStoryMain-component.js";
import { render } from "./framework/render.js";

const bodyContainer = document.querySelector(".readMoreStorys-app");

render(new ReadStorysHeaderComponent(), bodyContainer);
render(new ReadStorysTitleComponent(), bodyContainer);

const storiesContainer = document.createElement("div");
storiesContainer.className = "stories-container container";
bodyContainer.appendChild(storiesContainer);

document.addEventListener("DOMContentLoaded", async () => {
  const storiesData = await loadStoriesData();

  const urlParams = new URLSearchParams(window.location.search);
  const storyId = urlParams.get("id"); // Получаем id из параметров URL

  if (storyId) {
    // Если передан ID, показываем полную историю
    const selectedStory = storiesData.find((story) => story.id === storyId);

    if (selectedStory) {
      storiesContainer.innerHTML = `
          <div class=" story-card--full container readOneStory">
            <img src="${selectedStory.image}" alt="${selectedStory.title}" class="story-card__img readOneStory__image" />
            <h3 class="story-card__title text-black readOneStory__titel">${selectedStory.title}</h3>
            <p class="story-card__content text-black readOneStory__text">${selectedStory.content}</p>
          </div>
        `;
    } else {
      storiesContainer.innerHTML = `<p>История не найдена!</p>`;
    }
  } else {
    //Если ID нет, отображаем карточки историй
    storiesContainer.innerHTML = `
          <div class="readMoreStorys__storys-box4 container">
            ${storiesData
              .map(
                (story) => `
                <div class="readMoreStorys__storys-item storys-item" 
                }">
                  <img class="storys-item__img" src="${story.image}" alt="${
                  story.title
                }" />
                  <p class="storys-item__text-title textBlack">${
                    story.title
                  }</p>
                  <div class="storys-item__wrapper-textInfo">
                    <p class="storys-item__text-info textBlack">
                      ${story.content.substring(0, 100)}...
                    </p>
                  </div>
                  <button class="story-card__button storys-item__btn button" data-id="${
                    story.id
                  }">Читать больше</button>
                </div>
              `
              )
              .join("")}
          </div>
        `;

    // Добавляем обработчики для кнопок "Читать больше" на карточках
    const storyButtons = document.querySelectorAll(".story-card__button");
    storyButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const selectedId = event.target.dataset.id;
        window.location.href = `./readMoreStorys.html?id=${selectedId}`;
      });
    });
  }
});

render(new ReadStorysFooterComponent(), bodyContainer);
render(new ReadStorysRightReservedComponent(), bodyContainer);
