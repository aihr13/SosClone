// class RamEntity<T extends object> {
//   value: Readonly<T>;

//   constructor(value: T) {
//     this.value = value;
//   }
// }

// class Card extends RamEntity<{ name: string }> {
//   constructor(value: { name: string }) {
//     super(value);
//   }

//   clone() {
//     this.value.name = "re";
//   }
// }

// class CardFactory {}
