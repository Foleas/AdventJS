function wrapping(gifts) {
  let giftsWrapped = [];
  for (let i = 0; i < gifts.length; i++) {
    const wrap = "*".repeat(gifts[i].split("").length + 2);
    giftsWrapped.push(`${wrap}\n*${gifts[i]}*\n${wrap}`);
  }
  return giftsWrapped;
}

const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);
