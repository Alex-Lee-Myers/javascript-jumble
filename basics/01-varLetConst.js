//! var
//? problems with var
//* var is global. if it was in a for loop, it would be global, and not scoped to the for loop.
//* var is hoisted.
//* var is not block scoped.
//* var is not function scoped.
//? example 
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
//backtick `
// console.log(`This is i ${i}`); //? This is i 5

// function sayHello() {
//     var name = "Alex";
//     console.log(`Hello ${name}`);
// }
//  console.log(name); //? undefined
//  sayHello(); //? Hello Alex

//! What's difference between const and let?
//* const is (1) block scoped (2) not hoisted. (3) not function scoped. (4) immutable. (5) not reassignable. (6) not accessible outside of the block. (7) not accessible outside of the function. (8) not accessible outside of the class. (10) not accessible outside of the module. (11) not accessible outside of the namespace. (12) not accessible outside of the package.
//* let is (1) block scoped (2) hoisted. (3) function scoped. (4) mutable. (5) reassignable. (6) accessible outside of the block. (7) accessible outside of the function. (8) accessible outside of the class. (10) accessible outside of the module. (11) accessible outside of the namespace. (12) accessible outside of the package.
// const name = "Alex";
// name = "Bob"; //? error
// console.log(name); //? Alex
// if it was let, it'd change to Bob.

const users = [
    {
        name: "Alex",
        age: 30
    },
    {
        name: "Bob",
        age: 40
    }
];
// users = [
//     {
//         name: "Alex",
//         age: 30
//     },
//     {
//         name: "John",
//         age: 45
//     }
// ]; //? error

users.push({
    name: "John",
    age: 45
    });
//? this would work. you just can't directly modify like in line 38. 