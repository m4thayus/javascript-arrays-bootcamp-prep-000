var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginingOfArray(array, element) {
  return [$(element), ...$(array)];
}

console.log(addElementToBeginingOfArray(chocolateBars, "test"));
console.log(chocolateBars);