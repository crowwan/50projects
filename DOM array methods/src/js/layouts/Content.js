import Person from "../components/Person.js";
import { $, $c } from "../utils/qs.js";

export default function Content($app, { state }) {
  const $section = $c("section");
  const $ul = $c("ul");
  const $header = $c("header");
  const tmpl = `
    <span>Person</span>
    <span>Wealth</span>
  `;
  $section.classList.add("content-box");
  $header.innerHTML = tmpl;
  console.log(state);
  console.log("content");
  state.forEach(({ name, wealth }) => {
    new Person($ul, { name, wealth });
  });
  $section.append($header, $ul);
  $app.append($section);
}
