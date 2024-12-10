import AdoptHeaderComponent from "./view/viewAdoptPage/adoptHeader-component.js";
import AdoptFirstSecComponent from "./view/viewAdoptPage/adoptFirstSec-component.js";
import AdoptSecondSecComponent from "./view/viewAdoptPage/adoptSecondSec-component.js";
import AdoptThirdSecComponent from "./view/viewAdoptPage/adoptThirdSec-component.js";
import AdoptFourthSecComponent from "./view/viewAdoptPage/AdoptFourthSec-component.js";
import AdoptFifthSecComponent from "./view/viewAdoptPage/AdoptFifthSec-component.js";
import AdoptEmailFormComponent from "./view/viewAdoptPage/adoptEmailForm-component.js";
import AdoptFooterSecComponent from "./view/viewAdoptPage/adoptFooterSec-component.js";
import AdoptRightReservedComponent from "./view/viewAdoptPage/adoptRightsReserved-component.js";
import { render, RenderPosition } from "./framework/render.js";

const bodyContainer = document.querySelector(".adopt-app");

const adoptSecondSecComponent = new AdoptSecondSecComponent();


render(new AdoptHeaderComponent(), bodyContainer);
render(new AdoptFirstSecComponent(), bodyContainer);
render(new AdoptSecondSecComponent(), bodyContainer);
adoptSecondSecComponent.init();
render(new AdoptThirdSecComponent(), bodyContainer);
render(new AdoptFourthSecComponent(), bodyContainer);
render(new AdoptFifthSecComponent(), bodyContainer);
render(new AdoptEmailFormComponent(), bodyContainer);
render(new AdoptFooterSecComponent(), bodyContainer);
render(new AdoptRightReservedComponent(), bodyContainer);
