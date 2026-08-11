function compute(text) {
  let pointer1 = 0;
  let pointer2 = text.length - 1;

  if (text.length == 1) return "Palindrom";

  for (let index = 0; index < text.length; index++) {
    if (text[pointer1] == text[pointer2]) {
      pointer1 += 1;
      pointer2 -= 1;

      if (pointer1 == text.length - 1 && pointer2 == 0) {
        return "Palindrom";
      }
    } else {
      return "Bukan Palindrom";
    }

    if (pointer1 == pointer2) {
      return "Palindrom";
    }
  }

  return "Bukan Palindrom";
}

console.log(`compute`, compute("abba"));

function compute2(text) {
  let pointer1 = 0;
  let pointer2 = text.length - 1;

  while (pointer1 < pointer2) {
    if (text[pointer1] !== text[pointer2]) {
      return "bukan palindrome";
    }

    pointer1++;
    pointer2--;
  }

  return "palindrome";
}

console.log(`compute2`, compute2("abba"));
