/* eslint-disable import/prefer-default-export */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */

const errorContainer = document.querySelector(".error-container");
const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zipcode");
const passInput = document.querySelector("#password");
const passConfInput = document.querySelector("#passwordconf");
const allInputs = document.querySelectorAll("input");

const clearRequiredError = (element) => {
	errorContainer.innerHTML = "";
	element.setCustomValidity("");
};

const validateRequiredInput = (event) => {
	if (event.target.value.length == 0) {
		errorContainer.textContent += " All fields are required. ";
		event.target.setCustomValidity("Field is required.");
	} else {
		clearRequiredError(event.target);
	}
};

export const addRequiredInputListener = () => {
	allInputs.forEach((element) => {
		element.addEventListener("input", validateRequiredInput);
	});
};

const validateField = (input, regexp, outputContainer, errorMessage) => {
	input.addEventListener("input", (event) => {
		if (!regexp.test(event.target.value)) {
			outputContainer.textContent = errorMessage;
			event.target.setCustomValidity(errorMessage);
		} else {
			outputContainer.innerHTML = "";
			event.target.setCustomValidity("");
		}
	});
};

export const validateEmail = () => {
	validateField(
		emailInput,
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		document.querySelector(".error-container#email-error"),
		"Email must be valid"
	);
};

export const validateZip = () => {
	validateField(
		zipInput,
		/^\d{5}(?:[-\s]\d{4})?$/,
		document.querySelector(".error-container#zip-error"),
		"Zip code must be valid."
	);
};

export const addPasswordListener = () => {
	passConfInput.addEventListener("input", (event) => {
		const passConfContainer = document.querySelector(
			".error-container#passconf-error"
		);
		if (event.target.value != passInput.value) {
			passConfContainer.textContent = "Passwords must match";
			event.target.setCustomValidity("Passwords must match.");
		} else {
			passConfContainer.innerHTML = "";
			event.target.setCustomValidity("");
		}
	});
};
