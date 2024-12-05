import fizzbuzz from "./FizzBuzz";
describe("FizzBuzz", () => {
  it("genera FizzBuzz para 1", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("genera FizzBuzz para 2", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("genera FizzBuzz para 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("genera FizzBuzz para 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("genera FizzBuzz para múltiplos de 3", () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });

  it("genera FizzBuzz para múltiplos de 5", () => {
    expect(fizzbuzz(20)).toEqual("Buzz");
  });

  it("genera FizzBuzz para múltiplos de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
});