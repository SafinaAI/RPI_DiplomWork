import CareHeaderComponent from "./view/viewCarePage/careHeader-component.js";
import CareFirstSecComponent from "./view/viewCarePage/careFirstSec-component.js";
import CareSearchComponent from "./view/viewCarePage/careSearchSection-component.js";
import CareThirdSecComponent from "./view/viewCarePage/careThirdSec-component.js";
import CareBestSpecComponent from "./view/viewCarePage/careBestSpec-component.js";
import CareFourthSecComponent from "./view/viewCarePage/careFourthSec-component.js";
import CareFifthSecComponent from "./view/viewCarePage/careFifthSec-component.js";
import CareHappyStorysComponent from "./view/viewCarePage/careHappyStorys-component.js";
import CareEmailSecComponent from "./view/viewCarePage/careEmailSec-component.js";
import CareFooterSecComponent from "./view/viewCarePage/careFotterSec-component.js";
import CareRightsReservedSecComponent from "./view/viewCarePage/careRightsReservedSec-component.js";
import { render, RenderPosition } from "./framework/render.js";

const bodyContainer = document.querySelector(".care-app");

render(new CareHeaderComponent(), bodyContainer);
render(new CareFirstSecComponent(), bodyContainer);
render(new CareSearchComponent(), bodyContainer);
render(new CareThirdSecComponent(), bodyContainer);
render(new CareBestSpecComponent(), bodyContainer);
render(new CareFourthSecComponent(), bodyContainer);
render(new CareFifthSecComponent(), bodyContainer);
render(new CareHappyStorysComponent(), bodyContainer);
render(new CareEmailSecComponent(), bodyContainer);
render(new CareFooterSecComponent(), bodyContainer);
render(new CareRightsReservedSecComponent(), bodyContainer);
