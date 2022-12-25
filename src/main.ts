export class Person {
  constructor(protected readonly id: string, protected readonly name: string) {}

  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }
}
