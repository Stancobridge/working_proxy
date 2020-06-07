let obj = {
  name: "Stanley",
  age: 21
}


const handler = {
  get: function(tgt, prop, receiver) {
    if(prop == "name") {
      return tgt[prop] + " Hello";
    } else  {
      return Reflect.get(...arguments)
    }
  }

};
const prx = new Proxy(obj, handler);

export default prx

