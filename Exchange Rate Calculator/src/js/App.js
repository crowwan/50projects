import Main from "./layouts/Main.js";
import { $c } from "./utils/qs.js";

export default function App($app) {
  const $h1 = $c("h1");
  const $container = $c("div");
  const $p = $c("p");

  $h1.textContent = "Exchange Rate Calculator";
  $p.textContent =
    "Choose the currency and the amounts to get the exchange rate";
  $container.classList.add("container");
  new Main($container);
  $app.append($h1, $p, $container);
}
