import Select from "../components/Select.js";
import Swap from "../components/Swap.js";
import Input from "../components/Input.js";
import { $c, $ } from "../utils/qs.js";

export default function Main($app) {
  const $main = $c("div");
  $main.classList.add("main");

  this.state = {
    c1: "AUD",
    c2: "AUD",
    base: 1,
    rate: 1,
  };
  this.setState = (newState) => {
    console.log(newState);
    this.state = { ...this.state, ...newState };
    this.render();
  };

  const fetchExchangeAPI = (c) => {
    const API_KEY = "6554b9a471bd456cf0958bd0";
    const newState = { ...this.state, ...c };
    const path = `${newState.c1}/${newState.c2}`;
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${path}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ ...c, rate: data.conversion_rate });
      });
  };
  const calculate = (rate) => {
    return this.state.base * rate;
  };
  new Select($main, { currency: "c1", fetchExchangeAPI });
  new Input($main, this.setState);
  new Swap($main, { fetchExchangeAPI });
  new Select($main, { currency: "c2", fetchExchangeAPI });
  this.render = () => {
    const last = $("#result");
    console.log(last);
    last && $main.removeChild(last);
    const $res = $c("div");
    $res.id = "result";
    $res.textContent = calculate(this.state.rate).toFixed(2);
    $main.append($res);
  };
  this.render();

  $app.append($main);
}
