document.getElementById("pokemon-btn").addEventListener("click", changeTitleToPokemon);
document.getElementById("eggs-btn").addEventListener("click", changeTitleToEggs);

function changeTitleToPokemon() {
  document.getElementById("showComboBox").innerHTML= '<select id="filters"><option value="0">Pokedéx</option><option value="1">Ordem Alfabética</option></select>';
  document.getElementById("pageTitle").innerHTML = "POKÉMONS";
  document.getElementById("buttons").innerHTML ="";
  POKEMON.pokemon.forEach(myFunction);
  function myFunction(item) {
  document.getElementById("ListById").innerHTML += "Pokedéx:" + item.num + "/" + item.name +'<img src="'+item.img+'" >'+"<br>";
  }

//document.head.appendChild(pokemonInfo);
// let pokemonInfo = document.createElement("div");
//  document.getElementById("buttons").innerHTML= `<p>Lista de pokémons: ${}</p>`;

  }
function changeTitleToEggs() {
  document.getElementById("pageTitle").innerHTML = "OVOS";
  document.getElementById("buttons").innerHTML= "Lista de ovos";
  //`<p>Lista de pokémons: ${função que filtra os ovos pela kilometragem}</p>`;
}
