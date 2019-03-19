var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginingOfArray(array, element) {
  return newArray = [$(element), ...$(array)];
}

console.log(addElementToBeginingOfArray(chocolateBars, "test"));
console.log(chocolateBars);