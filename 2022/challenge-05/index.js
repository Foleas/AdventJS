function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const allCombinationsFilteredByMaxCities = giftsCities.reduce(
    (acum, value) => {
      // IF THERE IS ONE LARGER THAN MAXGIFTS
      if (value < maxGifts) {
        const acumConcat = [];
        acum.forEach((item) => {
          // FILTER BY MAX CITIES
          if (
            [value].concat(item).length > 0 &&
            [value].concat(item).length <= maxCities
          ) {
            acumConcat.push([value].concat(item));
          }
        });
        return acum.concat(acumConcat);
      }
      return acum;
    },
    [[]]
  );

  const allCombinations = allCombinationsFilteredByMaxCities
    .map((combination) => combination.reduce((a, v) => (a += v), 0))
    .filter((combination) => combination <= maxGifts)
    .sort((a, b) => b - a);

  console.log(allCombinations);

  return allCombinations[0] || 0;
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// console.log(getMaxGifts(giftsCities, maxGifts, maxCities)); //  [12, 3, 5] 20
// console.log(getMaxGifts([50], 15, 1)); // 0
// console.log(getMaxGifts([50], 100, 1)); // 50
// console.log(getMaxGifts([50, 70], 100, 1)); // 70
// console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000));

/*

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const solve = (giftsCities, maxGifts, maxCities) => {
    let maxGiftsValid = 0
    const cityLength = giftsCities.length
  giftsCities.map( () => {
    let cityCount = 0
    let acc = 0

    for(let idx = 0; idx < cityLength; idx++) {
      if(cityCount === maxCities) break
      if(acc + giftsCities[idx] <= maxGifts) {
        acc += giftsCities[idx]
        cityCount++
      }
    }
    if(acc > maxGiftsValid) maxGiftsValid = acc
    
    giftsCities.push(giftsCities[0])
    giftsCities.shift()
  })
  
  return maxGiftsValid
  }

  return solve(giftsCities, maxGifts, maxCities)
}

refactorizaron a esto


function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let maxGiftsValid = 0
    const cityLength = giftsCities.length
    giftsCities.forEach((item, idx) =>{
      let cityCount = 0
      let acc = 0
      for(idx; idx < cityLength; idx++) {
        if(cityCount === maxCities) break
        if(acc + giftsCities[idx] <= maxGifts) {
          acc += giftsCities[idx]
          cityCount++
        }
      }
      if(acc > maxGiftsValid) maxGiftsValid = acc
    })
  return maxGiftsValid
}
*/
