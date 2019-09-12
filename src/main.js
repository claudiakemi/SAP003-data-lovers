document.getElementById("pokemon-btn").addEventListener("click", changeTitleToPokemon);
document.getElementById("eggs-btn").addEventListener("click", changeTitleToEggs);

function changeTitleToPokemon() {
  document.getElementById("showComboBox").innerHTML= '<select id="filters"><option value="0">Pokedéx</option><option value="1">Ordem Alfabética</option></select>';
  document.getElementById("pageTitle").innerHTML = "POKÉMONS";
  //document.head.appendChild(pokemonInfo);

    //return listOfPokemons;
    // let pokemonInfo = document.createElement("div");
    // let pokemonName = POKEMON.pokemon[i].name;
    // let pokemonImg = POKEMON.pokemon[i].img;
  //const appearList = listComplete(POKEMON);
  //document.getElementById("buttons").innerHTML= POKEMON.pokemon;
    // document.getElementById("buttons").innerHTML= pokemonName;
    // document.getElementById("buttons").innerHTML= pokemonImg;
  }

  //`<p>Lista de pokémons: ${função que filtra os pokemons pelo num e img}</p>`;

  //document.getElementById("filters").addEventListener("valueChange", filteredBy);



function changeTitleToEggs() {
  document.getElementById("pageTitle").innerHTML = "OVOS";
  document.getElementById("buttons").innerHTML= "Lista de ovos";
  //`<p>Lista de pokémons: ${função que filtra os ovos pela kilometragem}</p>`;
}
