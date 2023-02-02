import { $c } from "../utils/qs.js";
export default function Header($app) {
  const $header = $c("header");
  $header.innerHTML = `
    <h1>DOM Array Methods</h1>
  `;
  $app.append($header);
}
