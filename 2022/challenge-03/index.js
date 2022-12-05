function distributeGifts(packOfGifts, reindeers) {
  const weightGifts = packOfGifts.reduce((acum, gift) => {
    acum += gift.length;
    return acum;
  }, 0);

  // console.log(weightGifts)

  const weightReindeers = reindeers.reduce((acum, reindeer) => {
    acum += reindeer.length * 2;
    return acum;
  }, 0);
  // console.log(weightReindeers)

  return parseInt(weightReindeers / weightGifts);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers)); //
