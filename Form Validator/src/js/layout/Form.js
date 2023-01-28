import FormElement from "../components/FormElement.js";
import FormTitle from "../components/FormTitle.js";
import SubmitButton from "../components/SubmitButton.js";
import { $c } from "../util/qs.js";

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
  });
  new FormTitle($form, { title: "Register With Us" });

  for (const [label, type] of Object.entries(inputMap)) {
    new FormElement($form, { label, type });
  }
  new SubmitButton($form);

  $app.append($form);
}
