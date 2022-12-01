function canMouseEat(direction, game) {
  if (!Array.isArray(game)) return false;

  //  COL X / ROW Y
  let mousePosition = { rowIndex: 0, colIndex: 0 };
  const rowsQty = game.length;
  const columnsQty = game[0].length;

  game.forEach((row, rowIndex) => {
    const colIndex = row.findIndex((item) => item === "m");
    if (colIndex > 0) mousePosition = { rowIndex, colIndex };
  });
  console.log("mousePosition", mousePosition);

  let newMousePosition = mousePosition;

  switch (direction) {
    case "up":
      console.log("UP");
      if (mousePosition.rowIndex - 1 >= 0) {
        newMousePosition = {
          rowIndex: mousePosition.rowIndex - 1,
          colIndex: mousePosition.colIndex,
        };
      }
      break;
    case "down":
      console.log("DOWN");
      if (mousePosition.rowIndex + 1 < rowsQty) {
        newMousePosition = {
          rowIndex: mousePosition.rowIndex + 1,
          colIndex: mousePosition.colIndex,
        };
      }
      break;
    case "left":
      console.log("LEFT");
      if (mousePosition.colIndex - 1 >= 0) {
        newMousePosition = {
          rowIndex: mousePosition.rowIndex,
          colIndex: mousePosition.colIndex - 1,
        };
      }
      break;
    case "right":
      console.log("RIGHT");
      if (mousePosition.colIndex + 1 < columnsQty) {
        newMousePosition = {
          rowIndex: mousePosition.rowIndex,
          colIndex: mousePosition.colIndex + 1,
        };
      }
      break;
  }

  console.log("newMousePosition", newMousePosition);

  const newRoom = game[newMousePosition.rowIndex][newMousePosition.colIndex];
  console.log("newRoom", newRoom);

  let response = false;
  if (newRoom === "*") {
    response = true;
  }

  console.log("response", direction, response);
  return response;
}

//https://adventjs.dev/challenges/25

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

canMouseEat("up", room); // false
canMouseEat("down", room); // true
canMouseEat("right", room); // false
canMouseEat("left", room); // false

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

canMouseEat("up", room2); // false
canMouseEat("down", room2); // false
canMouseEat("right", room2); // true
canMouseEat("left", room2); // false
