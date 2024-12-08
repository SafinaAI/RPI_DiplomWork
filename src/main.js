import HeaderComponent from "./view/viewMainPage/header-component.js";
import FirstSecMainComponent from "./view/viewMainPage/firstSecMain-component.js";
import SecondSecComponent from "./view/viewMainPage/SecondSec-component.js";
import ThirdSecComponent from "./view/viewMainPage/thirdSec-component.js";
import FourthSecComponent from "./view/viewMainPage/fourthSec-component.js";
import FifthSecComponent from "./view/viewMainPage/fifthSec-component.js";
import SixthSecComponent from "./view/viewMainPage/sixthSec-component.js";
import SeventhSecComponent from "./view/viewMainPage/seventhSec-component.js";
import FooterSecComponent from "./view/viewMainPage/footerSec-component.js";
import NinthSecComponent from "./view/viewMainPage/ninthSec-component.js";
import { render, RenderPosition } from "./framework/render.js";

const bodyContainer = document.querySelector(".board-app");

render(new HeaderComponent(), bodyContainer);
render(new FirstSecMainComponent(), bodyContainer);
render(new SecondSecComponent(), bodyContainer);
render(new ThirdSecComponent(), bodyContainer);
render(new FourthSecComponent(), bodyContainer);
render(new FifthSecComponent(), bodyContainer);
render(new SixthSecComponent(), bodyContainer);
render(new SeventhSecComponent(), bodyContainer);
render(new FooterSecComponent(), bodyContainer);
render(new NinthSecComponent(), bodyContainer);
