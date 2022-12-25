export class Person {
  protected id: string;
  protected name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }
}
