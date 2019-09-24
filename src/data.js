const data = POKEMON.pokemon;
const app = {
  filterByPokedex
}

function filterByPokedex(data, condition) {
  return data.filter(item => item.type.includes(condition));
}

function filterEggsByKm(e) {
  const valor = e.target.value;
  newCards(data.filter(item => item.egg.includes(valor)));
}
