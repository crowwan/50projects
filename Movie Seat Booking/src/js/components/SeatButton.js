import { $C } from "../util/qs.js";

export default function SeatButton($app, init, text, callback) {
  const $box = $C("div");
  $box.classList.add("seat-btn");

  this.state = {
    clickable: true,
    type: "null",
    style: "",
    ...init,
  };

  this.setState = (newState) => {
    this.state = { ...this.state, ...newState };
    this.render();
  };

  $box.addEventListener("click", (e) => {
    if (e.target.classList.contains("clickable")) {
      const type =
        this.state.type === "null"
          ? "selected"
          : "selected"
          ? "null"
          : "occupied";
      callback(this.state.place, type);
      this.setState({ type });
    }
  });

  this.render = () => {
    const html = `
      <div class='${this.state.type} ${
      this.state.clickable ? "clickable" : "not-clickable"
    }' style ='${this.state.style || ""}'></div>
    ${text || ""}
    `;
    $box.innerHTML = html;
  };
  this.render();
  $app.append($box);
}
