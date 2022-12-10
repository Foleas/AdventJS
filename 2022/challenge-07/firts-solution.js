function getGiftsToRefill(a1, a2, a3) {
  const a1Unique = a1.filter(
    (gift) => a2.indexOf(gift) === -1 && a3.indexOf(gift) === -1
  );

  const a2Unique = a2.filter(
    (gift) => a1.indexOf(gift) === -1 && a3.indexOf(gift) === -1
  );

  const a3Unique = a3.filter(
    (gift) => a1.indexOf(gift) === -1 && a2.indexOf(gift) === -1
  );

  console.log(a1Unique, a2Unique, a3Unique);

  return a1Unique
    .concat(a2Unique, a3Unique)
    .filter((v, i, arr) => arr.indexOf(v) === i);
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']
console.log({ gifts });
