import { $C } from "../util/qs.js";
import { movieData } from "../data/movieData.js";
export default function Select($app) {
  const $select = $C("div");
  $select.classList.add("select-container");

  const html = `
    <label>Pick a movie: </label>
    <select>
      ${Object.entries(movieData)
        .map(([k, v]) => `<option value='${v}'>${k} ($${v}) </option>`)
        .join("")}
    </select>
  `;
  $select.innerHTML = html;
  $app.append($select);
}
