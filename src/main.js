document.getElementById("pokemon-btn").addEventListener("click", changeTitleToPokemon);
document.getElementById("eggs-btn").addEventListener("click", changeTitleToEggs);

function changeTitleToPokemon() {
  document.getElementById("showComboBox").innerHTML = '<select id="filters"><option value="num">Pokedéx</option><option value="name">Ordem Alfabética</option></select>';
  document.getElementById("pageTitle").innerHTML = "POKÉMONS";
  document.getElementById("buttons").innerHTML = "";
  data.forEach((element) => {
    createDivs(element, "");
  });
}

function changeTitleToEggs() {
  document.getElementById("showComboBox").innerHTML = '<select id="eggFilters"><option value="none">Selecione uma kilometragem</option><option value="2 km">2 km</option><option value="5 km">5 km</option><option value="10 km">10 km</option></select>';
  document.getElementById("pageTitle").innerHTML = "OVOS";
  document.getElementById("buttons").innerHTML = "";
  data.forEach((element) => {
    createDivs(element, "withEgg");
  });
eggFilters.addEventListener ("change", minhaFuncao);
}

function newCards (filteredEggs){
  document.getElementById("listById").innerHTML = "";
  filteredEggs.forEach((item) => {
    createDivs(item, "withEgg");
  });
}

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
  document.getElementById("listById").appendChild(card).innerHTML;
}
