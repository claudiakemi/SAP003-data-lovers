document.getElementById("pokemon-btn").addEventListener("click", changeTitleToPokemon);
document.getElementById("eggs-btn").addEventListener("click", changeTitleToEggs);
const data = POKEMON.pokemon;
const name = document.createElement("div");
const img = document.createElement("img");
const num = document.createElement("div");
const card = document.createElement("div");

function changeTitleToPokemon() {
  const filterPokemons = document.getElementById("showComboBox").innerHTML= '<select id="pokeFilters"><option value="num">Pokedéx</option><option value="name">Ordem Alfabética</option></select>';
  document.getElementById("pageTitle").innerHTML = "POKÉMONS";
  document.getElementById("buttons").innerHTML ="";
  document.getElementById("listById").appendChild(card).innerHTML = `<div>${showPokemons}</div>`;
  const allPokemons = showPokemons.filterByPokedex(data, pokeFilters.value);
  pokeFilters.addEventListener("change", () => filterByPokedex(allPokemons));

}


function changeTitleToEggs() {
  document.getElementById("showComboBox").innerHTML= '<select id="eggDropdown"><option value="2 km">2 km</option><option value="5 km">5 km</option><option value="10 km">10 km</option></select>';
  document.getElementById("pageTitle").innerHTML = "OVOS";
  document.getElementById("buttons").innerHTML= "";
  data.forEach((element) => {
    const egg = document.createElement("div");
    egg.innerHTML = element.egg;

    const name = document.createElement("div");
    name.innerHTML = element.name;

    const img = document.createElement("img");
    img.src = element.img;

    const num = document.createElement("div");
    num.innerHTML = "Pokedéx: " + element.num;

    const card = document.createElement("div");
    card.className = "pokemonEgg";
    card.appendChild(egg);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(num);

    document.getElementById("listById").appendChild(card).innerHTML;

    // function filterEggs (data, "2 km") {
    //   return data.filter(item => item.egg.includes("2 km"));
    // }

  }
)}
