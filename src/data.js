const data = POKEMON.pokemon;

const app = {
  changeOrder,
  filterEggsByKm
}

function changeOrder() {
  let order = document.getElementById("order");
  if (order.value === "num") {
    data.sort(function (a, b) {
      return a.num.localeCompare(b.num);
    });
  } else if (order.value === "num2") {
    data.sort(function (a, b) {
      return b.num.localeCompare(a.num);
    });
  } else if (order.value === "AZ") {
    data.sort(function (a, b) {
      return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
    });
  } else {
    data.sort(function (a, b) {
      return b.name.localeCompare(a.name, "en", { sensitivity: "base" });
    });
  }
  printPokemons(data);
}


function filterEggsByKm(e) {
  const valor = e.target.value;
  newCards(data.filter(item => item.egg.includes(valor)));
}