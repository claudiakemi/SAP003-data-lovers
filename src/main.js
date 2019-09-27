const data = POKEMON.pokemon;
document.getElementById("pokemon-btn").addEventListener("click", changeTitleToPokemon);
document.getElementById("eggs-btn").addEventListener("click", changeTitleToEggs);

//função que muda os elementos do HTML após clicar no botão "Pokémons"
function changeTitleToPokemon() {
  document.getElementById("showComboBox").innerHTML = "<select id=\"order\"><option value=\"num\">Pokedéx 1 a 151</option><option value=\"num2\">Pokedéx 151 a 1</option><option value=\"AZ\">A-Z</option><option value=\"ZA\">Z-A</option></select>";
  document.getElementById("back"). innerHTML = "<input type=\"button\" class=\"btn\" value=\"Voltar\" onClick=\"window.location.reload()\">";
  document.getElementById("order").addEventListener("click", () => {
    let order = document.getElementById("order").value;
    const pokeData = app.changeOrder(data, order);
    
    printPokemons(pokeData);

  });
  document.getElementById("pageTitle").innerHTML = "POKÉMONS";
  document.getElementById("buttons").innerHTML = "";
  printPokemons(data);
};

//função que printa os pokemóns na tela em cards
function printPokemons(arr) {
  document.getElementById("listById").innerHTML = "";
  data.forEach((element) => {
    createDivs(element, "");
  });
};

//função que muda os elementos do HTML após clicar no botão "Ovos" e chama a função de filtro dos ovos
function changeTitleToEggs() {
  document.getElementById("showComboBox").innerHTML = "<input id=\"eggFilter2km\" class=\"eggImg\" type=\"image\" src=\"ovo-com-2km.png\" value=\"2 km\"> <input id=\"eggFilter5km\" class=\"eggImg\" type=\"image\" src=\"ovo-com-5km.png\" value=\"5 km\"> <input id=\"eggFilter10km\" class=\"eggImg\" type=\"image\" src=\"ovo-com-10km.png\" value=\"10 km\">";
  document.getElementById("back"). innerHTML = "<input type=\"button\" class=\"btn\" value=\"Voltar\" onClick=\"window.location.reload()\">";
  document.getElementById("buttons").innerHTML = "";
  document.getElementById("pageTitle").innerHTML = "OVOS";
  data.forEach((element) => {
    createDivs(element, "withEgg");
  });

  eggFilter2km.addEventListener("click", (e) => {
    const valor = e.target.value;
    const egg = app.filterEggsByKm(data, valor);
    newCards(egg);
   let porcentagem = parseFloat(151*(egg.length)/100)
    document.getElementById("result").innerHTML = porcentagem;
  });
  eggFilter5km.addEventListener("click", (e) => {
    const valor = e.target.value;
    const egg = app.filterEggsByKm(data, valor);
    newCards(egg);
    let porcentagem = parseFloat(151*(egg.length)/100)
    document.getElementById("result").innerHTML = porcentagem;
 
  });
  eggFilter10km.addEventListener("click", (e) => {
    const valor = e.target.value;
    const egg = app.filterEggsByKm(data, valor);
    newCards(egg);
    let porcentagem = parseFloat(151*(egg.length)/100)
    document.getElementById("result").innerHTML = porcentagem;
 
  });

  //função que cria os cards de pokemons depois que a kilometragem de ovos foi selecionada no dropdown
function newCards (filteredEggs) {
  document.getElementById("listById").innerHTML = "";
  filteredEggs.forEach((item) => {
    createDivs(item, "withEgg");
  });
}
}

//função de criar os cards (novas <div>)
function createDivs(element, divType) {
  let name = document.createElement("div");
  name.innerHTML = element.name;
  let img = document.createElement("img");
  img.src = element.img;
  let num = document.createElement("div");
  num.innerHTML = "Pokedéx: " + element.num;
  let card = document.createElement("div");
  if (divType == "withEgg") {
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
function eachPokemon(pokemonData) {
  document.getElementById("pageTitle").innerHTML = pokemonData.name;
  document.getElementById("buttons").innerHTML = "";
  document.getElementById("showComboBox").innerHTML = "";
  document.getElementById("back"). innerHTML = "<input type=\"button\" class=\"btn\" value=\"Voltar\" onClick=\"changeTitleToPokemon()\">";
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
