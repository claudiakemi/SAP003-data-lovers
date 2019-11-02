require("../src/data.js");

const pokemons = [{"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "005", "name": "Xxa", "egg": "Not in Eggs"}];

describe("função filtro", () => {
  it("is a function", () => {
    expect(typeof app.filterEggsByKm).toBe("function");
  });

  it("returns `menor número da pokedéx para o maior`", () => {
    expect(app.changeOrder(pokemons, "num")).toEqual([{"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "005", "name": "Xxa", "egg": "Not in Eggs"}]);
  });

  it("returns `maior numero da pokedéx para o menor`", () => {
    expect(app.changeOrder(pokemons, "num2")).toEqual([{"num": "005", "name": "Xxa", "egg": "Not in Eggs"}, {"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "001", "name": "Pikachu", "egg": "2 km"}]);
  });

  it("returns `ordem alfabética AZ`", () => {
    expect(app.changeOrder(pokemons, "AZ")).toEqual([{"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "005", "name": "Xxa", "egg": "Not in Eggs"}]);
  });

  it("returns `ordem alfabética ZA`", () => {
    expect(app.changeOrder(pokemons, "ZA")).toEqual([{"num": "005", "name": "Xxa", "egg": "Not in Eggs"}, {"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "004", "name": "Buba", "egg": "10 km"}]);
  });

  it("returns `quilometragem dos ovos`", () => {
    expect(app.filterEggsByKm(pokemons, "2 km")).toEqual([{"num": "001", "name": "Pikachu", "egg": "2 km"}]);
  });

  it("returns `quilometragem dos ovos`", () => {
    expect(app.filterEggsByKm(pokemons, "5 km")).toEqual([{"num": "003", "name": "Mew", "egg": "5 km"}]);
  });

  it("returns `quilometragem dos ovos`", () => {
    expect(app.filterEggsByKm(pokemons, "10 km")).toEqual([{"num": "004", "name": "Buba", "egg": "10 km"}]);
  });

  it("returns `pokemóns que não nascem em ovos`", () => {
    expect(app.notInEggs(pokemons, "Not in Eggs")).toEqual(2);
  });
});
