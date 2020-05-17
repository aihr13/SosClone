class RamEntity<T extends object> {
  value: Readonly<T>;

  constructor(value: T) {
    this.value = value;
  }

  clone(value: Partial<T>) {
    return { ...this.value, ...value };
  }
}

class Card extends RamEntity<{ name: string }> {
  constructor(value: { name: string }) {
    super(value);
  }

  readonly play = () => {};
}

const a = new Card({ name: "jo" });

class CardRepository {}
