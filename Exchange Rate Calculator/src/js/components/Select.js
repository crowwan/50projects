import { $, $c } from "../utils/qs.js";
import { countries } from "../data/data.js";
export default function Select($app, { currency, fetchExchangeAPI }) {
  const $selectContainer = $c("div");
  const $select = $c("select");
  const options = countries.map((a) => `<option value=${a}>${a}</option>`);

  $select.classList.add(currency);
  $select.addEventListener("change", (e) => {
    fetchExchangeAPI({ [currency]: $select.value });
  });

  $select.innerHTML = options;

  $selectContainer.append($select);

  $app.append($selectContainer);
}
