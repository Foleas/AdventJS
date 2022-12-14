function createCube(size) {
  let top = "";
  let bottom = "";
  for (let i = 1; i <= size; i++) {
    top += " ".repeat(size - i);
    top += "/\\".repeat(i);
    top += "_\\".repeat(size);
    top += "\n";
    bottom += " ".repeat(i - 1);
    bottom += "\\/".repeat(size - (i - 1));
    bottom += "_/".repeat(size);
    bottom += "\n";
  }
  return top + bottom.slice(0, -1);
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
