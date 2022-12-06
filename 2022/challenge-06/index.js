function createCube(size) {
  let top = "";
  let bottom = "";
  for (let i = 1; i <= size; i++) {
    top += `${" ".repeat(size - i)}${"/\\".repeat(i)}${"_\\".repeat(size)}${
      i <= size ? "\n" : ""
    }`;
    bottom += `${" ".repeat(i - 1)}${"\\/".repeat(size - (i - 1))}${"_/".repeat(
      size
    )}${i < size ? "\n" : ""}`;
  }
  return top + bottom;
}

const cubeOfOne = createCube(1);
console.log(cubeOfOne);
/*
 /\_\
 \/_/
*/

const cubeOfThree = createCube(3);
console.log(cubeOfThree);
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/
