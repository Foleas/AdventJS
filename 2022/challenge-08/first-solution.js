function isPalindrome(word) {
  const re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
  const partReversed = word
    .toLowerCase()
    .replace(re, "")
    .split("")
    .reverse()
    .join("");
  return word === partReversed ? true : false;
}

function checkPart(part) {
  if (isPalindrome(part)) return true;

  for (var i = 0; i < part.length; i++) {
    const re = /[^A-Za-z0-9]/g;
    const partLowerSplit = part.toLowerCase().replace(re, "").split("");
    // console.log("partLowerSplit", partLowerSplit);

    const firstPart = partLowerSplit.slice(0, i).join("");
    // console.log("firstPart", firstPart);
    const secondPart = partLowerSplit.slice(i + 1, part.length).join("");
    // console.log("secondPart", secondPart);
    if (isPalindrome(firstPart + secondPart)) return true;
  }

  return false;
}

console.log(checkPart("uwu")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
