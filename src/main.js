document.getElementById("pokemon-btn").addEventListener("click", changeTitleToPokemon);
document.getElementById("eggs-btn").addEventListener("click", changeTitleToEggs);

const data = POKEMON.pokemon;
const showPokemons = app.filterByPokedex(data, filters.value);

function changeTitleToPokemon() {
  document.getElementById("showComboBox").innerHTML = '<select id="filters"><option value="num">Pokedéx</option><option value="name">Ordem Alfabética</option></select>';
  document.getElementById("pageTitle").innerHTML = "POKÉMONS";
  document.getElementById("buttons").innerHTML = "";
  data.forEach((element) => {
    let name = document.createElement("div");
    name.innerHTML = element.name;

    let img = document.createElement("img");
    img.src = element.img;

    let num = document.createElement("div");
    num.innerHTML = "Pokedéx: " + element.num;

    let card = document.createElement("div");
    card.className = "pokemonCard";
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(num);

    document.getElementById("listById").appendChild(card).innerHTML;

  }
  )
}

function changeTitleToEggs() {
  document.getElementById("showComboBox").innerHTML = '<select id="filters"><option value="0">2 km</option><option value="1">5 km</option><option value="2">10 km</option></select>';
  document.getElementById("pageTitle").innerHTML = "OVOS";
  document.getElementById("buttons").innerHTML = "";
  data.forEach((element) => {
    let egg = document.createElement("div");
    egg.innerHTML = element.egg;

    let name = document.createElement("div");
    name.innerHTML = element.name;

    let img = document.createElement("img");
    img.src = element.img;

    let num = document.createElement("div");
    num.innerHTML = "Pokedéx: " + element.num;

    let card = document.createElement("div");
    card.className = "pokemonEgg";
    card.appendChild(egg);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(num);

    document.getElementById("listById").appendChild(card).innerHTML;
  }
  )
}
