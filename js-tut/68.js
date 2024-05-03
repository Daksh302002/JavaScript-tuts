//clone using object.assign

const obj = {
  key1: "Value1",
  key2: "Value2",
};

// const obj2 = {...obj};
const obj2 = Object.assign({}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);
