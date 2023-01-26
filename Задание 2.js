let x = 5;
let result = typeof x;
console.log(result);
result === "number";

switch (result) {
  case "number":
    console.log("x is number");
    break;

  case "string":
    console.log("x is string");
    break;

  case "boolean":
    console.log("x is boolean");
    break;

  default:
    console.log("type of x doesn't define");
}
