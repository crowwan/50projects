import { $C } from "../util/qs.js";

export default function Screen($app) {
  const $screen = $C("div");
  $screen.classList.add("screen");

  $app.append($screen);
}
