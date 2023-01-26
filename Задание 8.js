let myMap = new Map();
myMap.set("rain", "wet");
myMap.set("snow", "cold");

console.log(myMap.keys());
console.log(myMap.values());

let arrKeys = [];
let arrValues = [];

for (let name of myMap.keys()) {
  arrKeys.push(name);
}

for (let value of myMap.values()) {
  arrValues.push(value);
}

for (let i = 0; i < arrKeys.length; i++) {
  console.log(`Ключ - ${arrKeys[i]}, значение - ${arrValues[i]}`);
}
