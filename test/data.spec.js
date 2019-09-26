require("../src/data.js");

const pokemonzinho = [{"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}];

describe("função filtro", () => {
  it("is a function", () => {
    expect(typeof app.filterEggsByKm).toBe("function");
  });

  it("returns menor número da pokedéx para o maior", () => {
    expect(app.changeOrder(pokemonzinho, "num")).toEqual([{"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "004", "name": "Buba", "egg": "10 km"}]);
  });

  it("returns maior número da pokedéx para o menor", () => {
    expect(app.changeOrder(pokemonzinho, "num2")).toEqual([{"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "001", "name": "Pikachu", "egg": "2 km"}]);
  });

  it("returns ordem alfabética AZ", () => {
    expect(app.changeOrder(pokemonzinho, "AZ")).toEqual([{"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "001", "name": "Pikachu", "egg": "2 km"}]);
  });

  it("returns ordem alfabética ZA", () => {
    expect(app.changeOrder(pokemonzinho, "ZA")).toEqual([{"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "004", "name": "Buba", "egg": "10 km"}]);
  });

  it("returns quilometragem dos ovos de 2km", () => {
    expect(app.filterEggsByKm(pokemonzinho, "eggfilter2km")).toEqual([{"num": "001", "name": "Pikachu", "egg": "2 km"}]);
  });

  it("returns quiolometragem dos ovos de 5km", () => {
    expect(app.filterEggsByKm(pokemonzinho, "eggfilter5km")).toEqual([{"num": "003", "name": "Mew", "egg": "5 km"}]);
  });

  it("returns quilometragem dos ovos de 10km", () => {
    expect(app.filterEggsByKm(pokemonzinho, "eggfilter10km")).toEqual([{"num": "004", "name": "Buba", "egg": "10 km"}]);
  });
});
