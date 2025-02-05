const BASE_URL = "https://674ece2abb559617b26cc6cd.mockapi.io/"; // Замените {project_id} на ваш ID проекта MockAPI

// Загрузка данных о животных
async function loadPetsData() {
  try {
    const response = await fetch(`${BASE_URL}/adoptYourFriend`);
    if (!response.ok) throw new Error("Ошибка загрузки данных о животных");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Загрузка историй
async function loadStoriesData() {
  try {
    const response = await fetch(`${BASE_URL}/adoptStorys`);
    if (!response.ok) throw new Error("Ошибка загрузки историй");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// убедиться что MockAPI работает
(async function testMockAPI() {
  try {
    const response = await fetch("https://674ece2abb559617b26cc6cd.mockapi.io/adoptYourFriend");
    if (!response.ok) throw new Error("Ошибка подключения!");
    const data = await response.json();
    console.log("MockAPI работает, данные:", data);
  } catch (error) {
    console.error("Ошибка подключения:", error);
  }
})();


export { loadPetsData, loadStoriesData };
