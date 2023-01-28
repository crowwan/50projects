import { $c } from "../util/qs.js";

export default function FormElement($app, { label, type }) {
  const $inputBox = $c("div");
  this.state = {
    value: "",
    accepted: false,
  };

  this.setState = (newState) => {
    this.state = { ...this.state, ...newState };
    this.render();
  };

  this.render = function () {
    const tmpl = `
      <label>${label}</label>
      <input type='${type}' placeholder='Enter ${label}' class=''/>
    `;
    $inputBox.innerHTML = tmpl;
  };
  this.render();
  $app.append($inputBox);
}
