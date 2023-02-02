import Menu from "../components/Menu.js";
import { $c } from "../utils/qs.js";

export default function Sidebar($app, { state, setState }) {
  const $aside = $c("aside");

  new Menu($aside, { state, setState });
  $app.append($aside);
}
