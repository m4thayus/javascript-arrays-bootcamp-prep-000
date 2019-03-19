var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginingOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginingOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accesssElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginingOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginingOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
}

