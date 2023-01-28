import { $c } from "../util/qs.js";

export default function FormTitle($app, { title }) {
  const $formtitle = $c("div");
  function render() {
    const tmpl = `<h1 class='form-title'>${title}</h1>`;
    $formtitle.innerHTML = tmpl;
  }
  render();
  $app.append($formtitle);
  return;
}
