function compute(input) {
  if (input.length == 0) return false;

  let parenthesesSize = input.length - 1;
  let stack = [];
  const partner = new Map();
  partner.set("}", "{");
  partner.set("]", "[");
  partner.set(")", "(");

  for (let index = 0; index <= parenthesesSize; index++) {
    const element = input[index];

    if (!partner.has(element)) {
      stack.push(element);
    }

    if (partner.has(element)) {
      let stack_atas = "";
      if (stack.length > 0) {
        stack_atas = stack.pop();
      }

      if (stack_atas != partner.get(element)) return false;
    }
  }

  return stack.length == 0;
}

console.log(compute("{{"));
