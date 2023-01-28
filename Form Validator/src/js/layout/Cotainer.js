import { $c } from "../util/qs.js";
import Form from "./Form.js";
export default function Container($app) {
  const $container = $c("div");
  $container.classList.add("container");

  new Form($container);

  $app.append($container);
}
