import { $, $C } from "../util/qs.js";
import Screen from "../components/Screen.js";
import SeatButton from "../components/SeatButton.js";
import Price from "../components/Price.js";
function makeSeatData(r, c) {
  const data = [];
  for (let i = 0; i < c; i++) {
    data.push(Array(r).fill("null"));
  }
  return data;
}
export default function SeatsContainer($app) {
  const seats = makeSeatData(6, 8);
  console.log(seats);
  const $seatsContainer = $C("div");

  $seatsContainer.classList.add("seats-container");

  this.state = {
    seats,
    selected: 0,
    price: 0,
  };

  this.setState = (newState) => {
    this.state = { ...this.state, ...newState };
    this.render();
  };

  const clickCallback = ([c, r], type) => {
    const $select = $("select");
    this.state.seats[c][r] = type;
    const selected = this.state.seats
      .flat()
      .filter((a) => a === "selected").length;
    const price = +$select.value * selected;
    this.setState({ seats: this.state.seats, selected, price });
  };

  this.render = () => {
    $seatsContainer.innerHTML = "";
    new Screen($seatsContainer);

    const $seats = $C("div");

    $seats.classList.add("seats");

    seats.map((a, c) => {
      const $ul = $C("ul");
      a.map(
        (b, r) =>
          new SeatButton($ul, { type: b, place: [c, r] }, "", clickCallback)
      );
      $seats.append($ul);
    });

    $seatsContainer.append($seats);
    new Price($seatsContainer, {
      seats: this.state.selected,
      price: this.state.price,
    });
  };

  this.render();

  $app.append($seatsContainer);
}
