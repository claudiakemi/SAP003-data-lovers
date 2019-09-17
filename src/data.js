const showPokemons = {
  filterByPokedex:filterByPokedex
};

function filterByPokedex() {
  data.forEach((element) => {

  name.innerHTML = element.name;

  img.src = element.img;

  num.innerHTML = "Pokedéx: " + element.num;

  card.className = "pokemonCard";
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(num);
}


)}
