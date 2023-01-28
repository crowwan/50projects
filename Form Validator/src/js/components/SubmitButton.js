import { $c } from "../util/qs.js";

export default function SubmitButton($app) {
  const $btn = $c("button");
  $btn.classList.add("btn");
  $btn.textContent = "Submit";
  $app.append($btn);
}
