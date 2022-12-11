function checkPart(part) {
  const isPalindrome = part.split("").some((_c, i, arr) => {
    let subArr = arr;
    if (i > 0) {
      subArr = arr.slice(0, i).concat(arr.slice(i + 1));
    }
    return subArr.join("") === subArr.reverse().join("") ? true : false;
  });
  return isPalindrome;
}

/*
function checkPart(part) {
  const res = [...part, ""].some((_, i, arr) => {
    const subArr = arr.slice(0, i).concat(arr.slice(i + 1));

    return subArr.join("") === subArr.reverse().join("");
  });

  return res;
}*/

console.log(checkPart("uwu")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
