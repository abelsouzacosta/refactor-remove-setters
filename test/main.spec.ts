import { Person } from "../src/main";

describe("class Person", () => {
  it("Should create an object with the name given in the constructor", () => {
    let person = new Person("9899", "Name");

    expect(person.getName()).toBe("Name");
  });

  it("Should create an valid object with the id given in the constructor", () => {
    let person = new Person("9899", "Name");

    expect(person.getId()).toBe("9899");
  });
});
