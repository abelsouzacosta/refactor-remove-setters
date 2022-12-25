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

  it("Should be able to modify the name of the object instantiated", () => {
    let person = new Person("9899", "Name");

    expect(person.getName()).toBe("Name");

    person.setName("Other Name");

    expect(person.getName()).toBe("Other Name");
  });

  it("SHuold be able to modify the id of the object instantiated", () => {
    let person = new Person("9009", "Person");

    expect(person.getId()).toBe("9009");

    person.setId("8787");

    expect(person.getId()).toBe("8787");
  });
});
