const data = POKEMON.pokemon;
document.getElementById("pokemon-btn").addEventListener("click", changeTitleToPokemon);
document.getElementById("eggsBtn").addEventListener("click", changeTitleToEggs);

//função que muda os elementos do HTML após clicar no botão "Pokémons"
function changeTitleToPokemon() {
  document.getElementById("showComboBox").innerHTML = "<select id=\"order\"><option value=\"num\">Pokedéx 1 a 151</option><option value=\"num2\">Pokedéx 151 a 1</option><option value=\"AZ\">A-Z</option><option value=\"ZA\">Z-A</option></select>";
  document.getElementById("back"). innerHTML = "<input type=\"button\" class=\"btn back\" value=\"Voltar\" onClick=\"window.location.reload()\">";
  document.getElementById("order").addEventListener("click", () => {
    const order = document.getElementById("order").value;
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
  document.getElementById("back"). innerHTML = "<input type=\"button\" class=\"btn back\" value=\"Voltar\" onClick=\"window.location.reload()\">";
  document.getElementById("buttons").innerHTML = "";
  document.getElementById("pageTitle").innerHTML = "OVOS";
  data.forEach((element) => {
    createDivs(element, "withEgg");
  });
  const percentNotInEggs = app.notInEggs(data, "Not in Eggs");
  const resultNotInEggs = Math.round(percentNotInEggs/151*100);
  document.getElementById("result").innerHTML = resultNotInEggs + "% dos pokémons não aparecem em ovos. Clique nos ovos acima para descobrir quais nascem em ovos.";

  eggFilter2km.addEventListener("click", (e) => {
    const kmValue = e.target.value;
    const egg = app.filterEggsByKm(data, kmValue);
    newCards(egg);

    const percent2km = Math.round(parseFloat((egg.length)/151*100));
    document.getElementById("result").innerHTML = percent2km + "% de 151 pokémons aparecem em ovos de 2km";
  });
  eggFilter5km.addEventListener("click", (e) => {
    const kmValue = e.target.value;
    const egg = app.filterEggsByKm(data, kmValue);
    newCards(egg);
    const percent5km = Math.round(parseFloat((egg.length)/151*100));
    document.getElementById("result").innerHTML = percent5km + "% de 151 pokémons aparecem em ovos de 5km";
  });
  eggFilter10km.addEventListener("click", (e) => {
    const kmValue = e.target.value;
    const egg = app.filterEggsByKm(data, kmValue);
    newCards(egg);
    const percent10km = Math.round(parseFloat((egg.length)/151*100));
    document.getElementById("result").innerHTML = percent10km + "% de 151 pokémons aparecem em ovos de 10km";
  });

  //função que cria os cards de pokemons depois que a kilometragem de ovos foi selecionada no botão
  function newCards (filteredEggs) {
    document.getElementById("listById").innerHTML = "";
    filteredEggs.forEach((item) => {
      createDivs(item, "withEgg");
    });
  }
}

//função de criar os cards (novas <div>)
function createDivs(element, divType) {
  const name = document.createElement("div");
  name.innerHTML = element.name;
  const img = document.createElement("img");
  img.src = element.img;
  const num = document.createElement("div");
  num.innerHTML = "Pokedéx: " + element.num;
  const card = document.createElement("div");
  if (divType == "withEgg") {
    const egg = document.createElement("div");
    egg.innerHTML = element.egg;
    card.appendChild(egg);
    card.className = "pokemonCard";
  } else {
    card.className = "pokemonCard withoutEgg";}
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(num);
    //adiciona o evento de clique nos cards, chamando a função que leva para a interface com info de cada pokemon
    document.getElementById("listById").appendChild(card).innerHTML;
    if (divType != "withEgg") {
      card.addEventListener("click", () => {
        eachPokemon(element);
      });
    };
  };

  //função que traz a interface com informações de cada pokemon que for clicado
  function eachPokemon(pokemonData) {
    document.getElementById("pageTitle").innerHTML = pokemonData.name;
    document.getElementById("introText").innerHTML = "";
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("showComboBox").innerHTML = "";
    document.getElementById("result").innerHTML= "";
    document.getElementById("back"). innerHTML = "<input type=\"button\" class=\"btn back\" value=\"Voltar\" onClick=\"changeTitleToPokemon()\">";
    document.getElementById("listById").innerHTML = "";
    const img = document.createElement("img");
    img.src = pokemonData.img;
    img.className = "pokeImg";
    const num = document.createElement("div");
    num.innerHTML = "Pokedéx: " + pokemonData.num;
    num.className = "pokeNum";
    const weaknesses = document.createElement("div");
    weaknesses.innerHTML = "Fraquezas: " + pokemonData.weaknesses;
    weaknesses.className = "pokeWeaknesses";
    const type = document.createElement("div");
    type.innerHTML = "Tipo: " + pokemonData.type;
    type.className = "pokeType";
    const card = document.createElement("div");
    card.className = "pokeCard";
    card.appendChild(img);
    card.appendChild(num);
    card.appendChild(type);
    card.appendChild(weaknesses);
    document.getElementById("listById").appendChild(card).innerHTML;
  };
