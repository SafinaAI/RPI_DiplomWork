import ReadStorysHeaderComponent from "./view/readMoreStorysPage/readStorysHeader-component.js";
import ReadStorysTitleComponent from "./view/readMoreStorysPage/readStorysTitle-component.js";
import ReadStorysFooterComponent from "./view/readMoreStorysPage/readStorysFooter-component.js";
import ReadStorysRightReservedComponent from "./view/readMoreStorysPage/readStoryRightsReserved-component.js";
import ReadStorysMainComponent from "./view/readMoreStorysPage/readStoryMain-component.js";
import { render, RenderPosition } from "./framework/render.js";

const bodyContainer = document.querySelector(".readMoreStorys-app");

render(new ReadStorysHeaderComponent(), bodyContainer);
render(new ReadStorysTitleComponent(), bodyContainer);
render(new ReadStorysMainComponent(), bodyContainer);
render(new ReadStorysFooterComponent(), bodyContainer);
render(new ReadStorysRightReservedComponent(), bodyContainer);