document.getElementById("pokemon-btn").addEventListener("click", changeTitleToPokemon);
document.getElementById("eggs-btn").addEventListener("click", changeTitleToEggs);

//função que muda os elementos do HTML após clicar no botão "Pokémons"
function changeTitleToPokemon() {
  document.getElementById("showComboBox").innerHTML = '<select id="filters"><option value="num">Pokedéx</option><option value="name">Ordem Alfabética</option></select>';
  document.getElementById("pageTitle").innerHTML = "POKÉMONS";
  document.getElementById("buttons").innerHTML = "";
  data.forEach((element) => {
    createDivs(element, "");
  });
}

//função que muda os elementos do HTML após clicar no botão "Ovos" e chama a função de filtro dos ovos
function changeTitleToEggs() {
  document.getElementById("showComboBox").innerHTML = '<select id="eggFilters"><option value="none">Selecione uma kilometragem</option><option value="2 km">2 km</option><option value="5 km">5 km</option><option value="10 km">10 km</option></select>';
  document.getElementById("pageTitle").innerHTML = "OVOS";
  document.getElementById("buttons").innerHTML = "";
  data.forEach((element) => {
    createDivs(element, "withEgg");
  });
  eggFilters.addEventListener ("change", filterEggsByKm);
}

//função que cria os cards de pokemons depois que a kilometragem de ovos foi selecionada no dropdown
function newCards (filteredEggs){
  document.getElementById("listById").innerHTML = "";
  filteredEggs.forEach((item) => {
    createDivs(item, "withEgg");
  });
}

//função de criar os cards (novas <div>)
function createDivs(element, divType){
  let name = document.createElement("div");
  name.innerHTML = element.name;
  let img = document.createElement("img");
  img.src = element.img;
  let num = document.createElement("div");
  num.innerHTML = "Pokedéx: " + element.num;
  let card = document.createElement("div");
  if (divType == "withEgg"){
    card.className = "pokemonEgg";
    let egg = document.createElement("div");
    egg.innerHTML = element.egg;
    card.appendChild(egg);
  } else {
    card.className = "pokemonCard";
  }
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(num);
  //adiciona o evento de clique nos cards, chamando a função que leva para a interface com info de cada pokemon
  document.getElementById("listById").appendChild(card).innerHTML;
  card.addEventListener("click", () => {
    eachPokemon(element);
  });
};

//função que traz a interface com informações de cada pokemon que for clicado
function eachPokemon (pokemonData) {
  document.getElementById("pageTitle").innerHTML = pokemonData.name;
  document.getElementById("buttons").innerHTML = "";
  document.getElementById("showComboBox").innerHTML = "";
  document.getElementById("listById").innerHTML = "";
  let img = document.createElement("img");
  img.src = pokemonData.img;
  img.className = "pokeImg";
  let num = document.createElement("div");
  num.innerHTML = "Pokedéx: " + pokemonData.num;
  num.className = "pokeNum";
  let weaknesses = document.createElement("div");
  weaknesses.innerHTML = "Fraquezas: " + pokemonData.weaknesses;
  weaknesses.className = "pokeWeaknesses";
  let type = document.createElement("div");
  type.innerHTML = "Tipo: " + pokemonData.type;
  type.className = "pokeType";
  let card = document.createElement("div");
  card.className = "pokeCard";
  card.appendChild(img);
  card.appendChild(num);
  card.appendChild(type);
  card.appendChild(weaknesses);
  document.getElementById("listById").appendChild(card).innerHTML;
};
