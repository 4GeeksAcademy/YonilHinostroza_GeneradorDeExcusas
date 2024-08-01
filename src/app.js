/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whIndex = Math.floor(Math.random() * who.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let whaIndex = Math.floor(Math.random() * what.length);
  let wheIndex = Math.floor(Math.random() * when.length);

  return (
    who[whIndex] +
    " " +
    action[actIndex] +
    "" +
    what[whaIndex] +
    " " +
    when[wheIndex]
  );
};
