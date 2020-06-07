import {
  anotherIncHandler,
  decrease,
  decreaseHandler,
  increase,
  increaseHandler,
  anotherincrease
} from "./learn/counter";

increase.addEventListener("click", increaseHandler);
decrease.addEventListener("click", decreaseHandler);
anotherincrease.addEventListener("click", anotherIncHandler);
