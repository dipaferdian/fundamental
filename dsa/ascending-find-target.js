function compute(array, target) {
  let low = 0;
  let high = array.length - 1;
  let middle;

  while (high >= low) {
    middle = low + Math.floor((high - low) / 2);

    if (array[middle] == target) {
      return middle;
    }

    if (array[middle] > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return -1;
}

console.log(compute([10, 20, 30, 40, 50], 20));

function compute2(array, target, high, low) {
  if (low > high) return -1;
  let middle;

  if (high >= low) {
    middle = low + Math.floor((high - low) / 2);

    if (array[middle] == target) {
      return middle;
    }

    if (array[middle] > target) {
      return compute2(array, target, middle - 1, low);
    } else {
      return compute2(array, target, high, middle + 1);
    }
  }
}

const array = [10, 20, 30, 40, 50];
const target = 20;

console.log(compute2(array, target, array.length, 0));
