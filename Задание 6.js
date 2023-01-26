let arr = [3, 3, 3, 3, 3, 3];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[0] === arr[i]) {
    newArr.push(1);
  } else {
    newArr.push(0);
  }
}

let result = newArr.reduce((multi, current) => multi * current);

if (result === 0) {
  console.log("false");
} else {
  console.log("true");
}
