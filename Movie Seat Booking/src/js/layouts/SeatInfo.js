import SeatButton from "../components/SeatButton.js";
import { $C } from "../util/qs.js";

export default function SeatInfo($app) {
  const $seatInfo = $C("div");
  $seatInfo.classList.add("seat-info");

  new SeatButton($seatInfo, { clickable: false }, "N/A");
  new SeatButton($seatInfo, { clickable: false, type: "selected" }, "Selected");
  new SeatButton($seatInfo, { clickable: false, type: "occupied" }, "Occupied");

  $app.append($seatInfo);
}
