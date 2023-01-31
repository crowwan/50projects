import { $, $c } from "../utils/qs.js";

export default function Swap($app, { fetchExchangeAPI }) {
  const $btn = $c("button");
  $btn.classList.add("swap");
  $btn.textContent = "swap";
  $btn.addEventListener("click", (e) => {
    const c1 = $("select.c1");
    const c2 = $("select.c2");
    fetchExchangeAPI({ c1: c2.value, c2: c1.value });
    [c1.value, c2.value] = [c2.value, c1.value];
  });
  $app.append($btn);
}
