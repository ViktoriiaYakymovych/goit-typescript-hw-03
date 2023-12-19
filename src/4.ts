class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private personKey: Key;

  constructor(key: Key) {
    this.personKey = key;
  }

  getKey(): Key {
    return this.personKey;
  }
}

abstract class House {
  private houseKey: Key;
  protected door: boolean = false;
  tenants: Person[] = [];

  constructor(key: Key) {
    this.houseKey = key;
  }

  public comeIn(person: Person): void {
    this.door && this.tenants.push(person);
  }

  public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  private myKey: Key;

  constructor(key: Key) {
    super(key);
    this.myKey = key;
  }

  public openDoor(key: Key): boolean {
    return key.getSignature() === this.myKey.getSignature();
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
