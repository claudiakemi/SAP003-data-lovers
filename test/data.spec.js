require("../src/data.js");

const pokemonzinho = [{"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}];

describe("função filtro", () => {
  it("is a function", () => {
    expect(typeof app.filterEggsByKm).toBe("function");
  });

  it("returns `example`", () => {
    expect(app.changeOrder(pokemonzinho, "num")).toEqual([{"num": "001", "name": "Pikachu", "egg": "2 km", "egg": "2 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "004", "name": "Buba", "egg": "10 km"}]);
  });

  it("returns `example`", () => {
    expect(app.changeOrder(pokemonzinho, "num")).toEqual([{"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "001", "name": "Pikachu", "egg": "2 km"}]);
  });

  it("returns `example`", () => {
    expect(app.changeOrder(pokemonzinho, "name")).toEqual([{"num": "004", "name": "Buba", "egg": "10 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "001", "name": "Pikachu", "egg": "2 km"}]);
  });

  it("returns `example`", () => {
    expect(app.changeOrder(pokemonzinho, "name")).toEqual([{"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "004", "name": "Buba", "egg": "10 km"}]);
  });

  it("returns `example`", () => {
    expect(app.filterEggsByKm(pokemonzinho, "name")).toEqual([{"num": "001", "name": "Pikachu", "egg": "2 km"}, {"num": "003", "name": "Mew", "egg": "5 km"}, {"num": "002", "name": "Char", "egg": "Not in Eggs"}, {"num": "004", "name": "Buba", "egg": "10 km"}]);
  });
});
