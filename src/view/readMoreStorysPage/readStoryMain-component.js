import { createElement } from "../../framework/render.js";

function createReadStorysMainComponentTemplate() {
  return `
    <main id="story-container">
      <p>Загрузка историй...</p>
      
    </main>
    
  `;
}

export default class ReadStorysMainComponent {
  getTemplate() {
    return createReadStorysMainComponentTemplate();
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
