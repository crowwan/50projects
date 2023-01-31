import { $c } from "../utils/qs.js";

export default function Input($app, setState) {
  const $input = $c("input");
  $input.value = 1;
  $input.classList.add("input");
  $input.type = "number";
  $input.addEventListener("change", (e) => {
    setState({ base: e.target.value });
  });
  $app.append($input);
}
