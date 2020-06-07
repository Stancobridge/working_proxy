 let count = document.querySelector(".count"); let increase = document.querySelector(".increase"); let anotherincrease = document.querySelector(".anotherincrease"); let decrease = document.querySelector(".decrease");


let state = {
  count: 0,
};

const countHandlers = {
  set: function (tgt, prop, value) {

    let allCountsElement = document.querySelectorAll(`.${prop}`);
    allCountsElement.forEach((el) => {
      el.textContent = value;
      
    });
    tgt[prop] = value
    return value
  },
};
 let countProxy = new Proxy(state, countHandlers);

 let increaseHandler = () => {
  countProxy.count = countProxy.count + 1;
}; let decreaseHandler = () => {
  countProxy.count = countProxy.count - 1 
};
 let anotherIncHandler = () => {

  countProxy.count = countProxy.count + 2
};

countProxy.count = 43652467532874
