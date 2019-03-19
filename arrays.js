var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginingOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray
}

console.log(addElementToBeginingOfArray(chocolateBars, "test"));
console.log(chocolateBars);