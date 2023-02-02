import { $c } from "../utils/qs.js";
export default function Person($app, { name, wealth }) {
  const $li = $c("li");
  const tmpl = `
    <span>${name}</span>
    <span>$${wealth}</span>
  `;
  $li.classList.add("person");
  $li.innerHTML = tmpl;
  $app.append($li);
}
