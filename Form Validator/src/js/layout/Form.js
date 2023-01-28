import FormElement from "../components/FormElement.js";
import FormTitle from "../components/FormTitle.js";
import SubmitButton from "../components/SubmitButton.js";
import { $, $A, $c } from "../util/qs.js";

export default function Form($app) {
  const $form = $c("form");
  $form.classList.add("form");

  const inputMap = {
    Username: "text",
    Email: "text",
    Password: "password",
    "Confirm Password": "password",
  };

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkValidation();
  });
  new FormTitle($form, { title: "Register With Us" });

  for (const [label, type] of Object.entries(inputMap)) {
    new FormElement($form, { label, type });
  }
  new SubmitButton($form);

  $app.append($form);
}

function checkValidation() {
  const $inputs = $A("input");

  $inputs.forEach((input) => {
    console.log(input.value);
    switch (input.id) {
      case "Username":
        input.value.length > 0 ? successValidate(input) : failValidate(input);
        break;
      case "Email":
        input.value.length > 0 && emailValidate(input)
          ? successValidate(input)
          : failValidate(input);
        break;
      case "Password":
        input.value.length > 0 && passwordValidate(input)
          ? successValidate(input)
          : failValidate(input);
        break;
      case "Confirm Password":
        input.value.length > 0 && confirmPasswordValidate(input)
          ? successValidate(input)
          : failValidate(input);
        break;
    }
  });
}

function successValidate(input) {
  input.classList.remove("error");
  input.classList.add("success");
}
function failValidate(input) {
  input.classList.remove("success");
  input.classList.add("error");
}
function emailValidate(input) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return input.value.match(validRegex);
}
function passwordValidate(input) {
  return input.value.length >= 6;
}
function confirmPasswordValidate(input) {
  const password = $("#Password");
  return input.value === password.value;
}
