var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginingOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginingOfArray(array, element) {
  array.unshift(element)
  return array;
}

console.log(addElementToBeginingOfArray(chocolateBars, "test"));
console.log(chocolateBars);