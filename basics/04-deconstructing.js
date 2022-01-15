//! Deconstruct
const user = {
    name: "John",
    lastName: "Smith",
    age: 25,
    isMarried: false
};

const { name, lastName, isMarried } = user;
console.log(name); //? John
console.log(lastName); //? Smith
console.log(isMarried); //? false

const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers; //? first = 1, second = 2, third = 3

