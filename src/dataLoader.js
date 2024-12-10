//  Асинхронная загрузка данных из JSON
//Функцию loadPetsData лучше всего разместить в отдельном модуле, который отвечает за работу с данными. Например, создайте файл dataLoader.js:

async function loadPetsData() {
  try {
    const response = await fetch("../src/data/adoptYourFriend.json"); // Укажите правильный путь к JSON-файлу
    if (!response.ok) throw new Error("Ошибка загрузки данных");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { loadPetsData };

document.addEventListener("DOMContentLoaded", () => {
  const petsData = JSON.parse(localStorage.getItem("petsData") || "[]");

  if (petsData.length === 0) {
    console.error("Данные не найдены!");
    return;
  }

  const container = document.querySelector(".adopt-cards-container");
  container.innerHTML = petsData
    .map(
      (pet) => `
        <div class="adopt-card">
          <img src="${pet.image}" alt="${pet.title}" class="adopt-card__img" />
          <h3 class="adopt-card__title">${pet.title}</h3>
          <p class="adopt-card__details">${pet.gender} / ${pet.age} / ${pet.city}</p>
          <p class="adopt-card__description">${pet.description}</p>
          <button class="adopt-card__contact-btn">Связаться с приютом</button>
        </div>
        `
    )
    .join("");
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("adopt-card__contact-btn")) {
    const card = event.target.closest(".adopt-card");
    const petName = card.querySelector(".adopt-card__title").textContent;
    alert(`Связаться с приютом по поводу: ${petName}`);
  }
});
