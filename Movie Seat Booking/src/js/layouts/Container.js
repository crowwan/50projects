import { $C } from "../util/qs.js";
import Select from "../components/Select.js";
import SeatInfo from "./SeatInfo.js";
import SeatsContainer from "./SeatsContainer.js";
export default function Container($app) {
  const $container = $C("div");
  $container.classList.add("container");

  Select($container);
  SeatInfo($container);
  new SeatsContainer($container);

  $app.append($container);
}
