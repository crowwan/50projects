export { $, $c, $a };
const $ = (sel) => document.querySelector(sel);
const $c = (sel) => document.createElement(sel);
const $a = (sel) => document.querySelectorAll(sel);
