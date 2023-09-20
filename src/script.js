import "./style.css";
import {
	addPasswordListener,
	addRequiredInputListener,
	validateEmail,
	validateZip,
} from "./validation";

addRequiredInputListener();
validateEmail();
validateZip();
addPasswordListener();
