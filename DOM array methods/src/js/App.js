import Header from "./layouts/Header.js";
import Main from "./layouts/Main.js";

export default function App($app) {
  new Header($app);
  new Main($app);
}
