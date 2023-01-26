let a;
let b;
a = prompt("Введите значение");
b = +a;
typeof a;
typeof b;

if (typeof b === "number" && a % 2 == 0) {
  console.log("Число четное");
}

if (typeof b === "number" && a % 2 != 0) {
  console.log("Число нечетное");
}

if (typeof b === "NaN" || typeof b !== "number") {
  console.log("Упс, кажется вы ошиблись");
}
