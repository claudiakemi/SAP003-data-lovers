require("../src/data.js");

describe("example", () => {
  it("is a function", () => {
    expect(typeof example).toBe("function");
  });

  it("returns `example`", () => {
    expect(example()).toBe("example");
  });

  it("returns `example`", () => {
    expect(app.example()).toEqual("example");
});
