import { $, $c } from "../utils/qs.js";
import Sidebar from "./Sidebar.js";
import Content from "./Content.js";
import fetchUser from "../utils/fetchUser.js";
export async function makeUser(ar) {
  const res = await fetchUser();
  const user = res.results[0];
  console.log(user);
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    wealth: (Math.random() * (200_000_000 - 50_000_000) + 50_000_000).toFixed(
      2
    ),
  };
  return newUser;
}

export default function Main($app) {
  this.state = [];
  this.setState = (newState) => {
    this.state = newState;
    console.log("rerender");
    render();
  };
  (async () => {
    for (let i = 0; i < 3; i++) {
      const newUser = await makeUser();
      this.setState([...this.state, newUser]);
    }
  })();
  const $main = $c("main");

  const render = () => {
    const $contentBox = $(".content-box");
    const $sideBar = $("aside");
    console.log(this.state);
    $contentBox && $main.removeChild($contentBox);
    $sideBar && $main.removeChild($sideBar);
    new Sidebar($main, { state: this.state, setState: this.setState });
    new Content($main, { state: this.state });
  };
  render();

  $app.append($main);
}
