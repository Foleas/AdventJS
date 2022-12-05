/*
const fitsInOther = (box1, box2) => {
  return box1.l < box2.l && box1.w < box2.w && box1.h < box2.h ? true : false;
};

function fitsInOneBox(boxes) {
  const boxesSorted = boxes.sort((a, b) => a.l - b.l);
  //a.l-b-l && a.w-b.w && a.h-b.h
  for (let i = 0; i < boxesSorted.length; i++) {
    //console.log(boxesSorted[i],boxesSorted[i+1]);
    if (boxesSorted[i + 1] === undefined) break;
    if (!fitsInOther(boxesSorted[i], boxesSorted[i + 1])) {
      //console.log("no fit")
      return false;
    }
  }
  return true;
}
*/

/*
function fitsInOneBox(boxes) {
  const boxesSorted =
    boxes.length > 1 &&
    boxes.every((box) => box.l && box.w && box.h) &&
    boxes.sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h);

  //console.log(boxesSorted);

  const allFits = boxesSorted.every((box, i) => {
    if (boxes[i + 1]) {
      //console.log("hay uno mas");
      return (
        boxes[i + 1].l > box.l &&
        boxes[i + 1].w > box.w &&
        boxes[i + 1].h > box.h
      );
    } else {
      return true;
    }
  });
  //console.log("allFits", allFits);

  return allFits;
}*/

function fitsInOneBox(boxes) {
  return (
    boxes.length > 1 &&
    boxes.every((box) => box.l && box.w && box.h) &&
    boxes
      .sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h)
      .every((box, i) => {
        if (boxes[i + 1]) {
          //console.log("hay uno mas");
          return (
            boxes[i + 1].l > box.l &&
            boxes[i + 1].w > box.w &&
            boxes[i + 1].h > box.h
          );
        } else {
          return true;
        }
      })
  );

  /*
  return (
    boxes.length > 1 &&
    boxes.every((box) => box.l && box.w && box.h) &&
    boxes
      .sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h)
      .every((box, i) =>
        boxes[i + 1]
          ? boxes[i + 1].l > box.l &&
            boxes[i + 1].w > box.w &&
            boxes[i + 1].h > box.h
          : true
      )
  );
  */
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
];

console.log(fitsInOneBox(boxes)); // true

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

console.log(fitsInOneBox(boxes2)); // false

const boxes3 = [
  {
    l: 1,
    w: 1,
    h: 1,
  },
  {
    l: 3,
    w: 3,
    h: 3,
  },
  {
    l: 2,
    w: 2,
    h: 2,
  },
];

console.log(fitsInOneBox(boxes3)); // true
