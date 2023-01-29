import { $C } from "../util/qs.js";
export default function Price($app, { seats, price }) {
  const $price = $C("div");
  $price.style.marginTop = "1rem";
  const html = `
    You have selected <span style='color:var(--selected-color)'>${seats}</span> seats for a price of $<span style='color:var(--selected-color)'>${price}</span>
  `;
  $price.innerHTML = html;

  $app.append($price);
}
