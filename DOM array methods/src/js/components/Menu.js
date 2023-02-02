import { $, $c } from "../utils/qs.js";

import MenuItem from "./MenuItem.js";
import { makeUser } from "../layouts/Main.js";
const add = (a, b) => a + b;
const descSort = (a, b) => b - a;
const double = (a) => {
  console.log(a);
  return a * 2;
};
const overOneMillion = (a) => a >= 100_000_000;

export default function Menu($app, { state, setState }) {
  const $ul = $c("ul");

  $ul.classList.add("menu");
  const onClickAdd = () => {
    makeUser().then((res) => {
      console.log(state);
      setState([...state, res]);
    });
  };
  const onClickDouble = () => {
    console.log(state);
    setState(
      state.map((a) => {
        const wealth = double(+a.wealth);
        return { ...a, wealth };
      })
    );
  };
  const onClickFilter = () => {
    setState(state.filter((a) => overOneMillion(+a.wealth)));
  };
  const onClickSort = () => {
    const newAr = [...state];
    setState(newAr.sort((a, b) => descSort(+a.wealth, +b.wealth)));
  };
  const onClickCalculate = () => {
    const $total = $(".total");
    const $ul = $(".content-box > ul");
    console.log($ul);
    $total && $ul.removeChild($total);
    const $li = $c("li");
    $li.classList.add("total");
    const tmpl = `
    <span>total</span>
    <span>${state.reduce((a, b) => add(a, +b.wealth), 0)}</span>
    `;
    $li.innerHTML = tmpl;
    $ul.append($li);
  };
  const btnInfo = [
    { text: "Add User", onClick: onClickAdd },
    { text: "Double Money", onClick: onClickDouble },
    { text: "Show Only Millionaires", onClick: onClickFilter },
    { text: "Sort by Richest", onClick: onClickSort },
    { text: "Calculate entire Wealth", onClick: onClickCalculate },
  ];

  btnInfo.forEach(({ text, onClick }) => {
    new MenuItem($ul, { text, onClick });
  });

  $app.append($ul);
}
