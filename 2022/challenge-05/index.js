//https://www.youtube.com/watch?v=oXHJBHCXsnw

function obtenerConjuntoPotencia(Arr) {
  if (!Array.isArray(Arr)) return false;

  return Arr.reduce(
    (acum, value) => acum.concat(acum.map((item) => [value].concat(item))),
    [[]]
  );

  const combSumLong = Arr.reduce(
    (acum, value) => {
      console.log("acum", acum);
      console.log("value", value);

      const newCombination = acum.map((item) => {
        console.log("item", item);
        const arrayTemp = [value].concat(item);
        console.log("arrayTemp", arrayTemp);
        return arrayTemp;
      });

      console.log("newCombination", newCombination);

      return acum.concat(newCombination);
    },
    [[]]
  );
}

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  // GET ALL COMBINATIONS POSSIBLE
  const allCombinations = obtenerConjuntoPotencia(giftsCities);
  // FILTER COMBINATIONS BY MAX CITIES
  const allCombinationsFilteredByMaxCities = allCombinations.filter(
    (combination) => combination.length > 0 && combination.length <= maxCities
  );

  // GET THE SUM OF EACH COMBINATION
  const allCombinationsSum = allCombinationsFilteredByMaxCities.map(
    (combination) => combination.reduce((a, v) => (a += v), 0)
  );
  // FILTER SUM BY MAXGIFTS
  const allCombinationsFiltered = allCombinationsSum.filter(
    (combinationSum) => combinationSum <= maxGifts
  );
  // SORT FROM MAJOR TO MINOR
  const allCombinationsFilteredSorted = allCombinationsFiltered.sort(
    (a, b) => b - a
  );

  // RETURN FIRST OR 0
  return allCombinationsFilteredSorted[0] || 0;
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)); //  [12, 3, 5] 20
console.log(getMaxGifts([50], 15, 1)); // 0
console.log(getMaxGifts([50], 100, 1)); // 50
console.log(getMaxGifts([50, 70], 100, 1)); // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
