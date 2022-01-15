//! Inheritance
//? what is inheritance?
//* (1) inheritance is the process of creating a new class from an existing class. (2) inheritance is a way to reuse code.
const ed = 100;
const you = ed;
const howMuchYouHave = you;
console.log(howMuchYouHave); //? 100

const initialUsers = ['Alex', 'Bob', 'John'];

// const currentUsers = initialUsers;
const currentUsers = [...initialUsers];
currentUsers.push('Bree', 'Cindy');
console.log(currentUsers); //? ['Alex', 'Bob', 'John', 'Bree', 'Cindy']
console.log(initialUsers); //? ['Alex', 'Bob', 'John']

