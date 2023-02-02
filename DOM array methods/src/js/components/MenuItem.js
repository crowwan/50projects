import { $c } from "../utils/qs.js";

export default function MenuItem($app, { text, onClick }) {
  const $li = $c("li");
  const $btn = $c("button");
  $btn.textContent = text;
  $btn.addEventListener("click", (e) => {
    console.dir(onClick);
    onClick();
  });
  $li.append($btn);
  $app.append($li);
}
