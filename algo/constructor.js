function User(name, age) {
  this.name = name;
  this.age = age;
}

const user = new User('Dipa', 25);

console.log(user)



// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Police extends Person {
//   constructor(name, rank) {
//     super(name); // wajib
//     this.rank = rank;
//   }

//   getRank() {
//     return this.rank;
//   }
// }


// class Person {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   getName() {
//     return this.#name;
//   }
// }

// const p = new Person('A');
// console.log(p.getName());

// const value = 0;
// const result = value || 10;
// console.log(result); // 10 (unexpected if 0 is a valid value)

// const product = {};

// Using optional chaining
    // const tax = product?.price?.tax;
// console.log(tax); // undefined