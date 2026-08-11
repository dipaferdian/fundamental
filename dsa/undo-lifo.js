function compute(input) {
  let newArray = [];
  for (let index = 0; index < input.length; index++) {
    const element = input[index];

    if (element == "Undo") {
      newArray.pop();
    } else {
      newArray.push(element);
    }
  }

  let result = "";
  for (const element of newArray) {
    result += element;
  }

  return result;
}

console.log(compute(["A", "B", "Undo", "Undo"]));
console.log(compute(["A", "B", "C", "Undo"]));
console.log(compute(["H", "A", "Undo", "A", "I"]));
