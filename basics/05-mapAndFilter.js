//! Map and Filter
//? Map
const numbersnumbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbersnumbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const moreUsers = [
    { name: "John", age: 25 },
    { name: "Mike", age: 30 },
    { name: "Nancy", age: 40 }
];

const modifiedUser = moreUsers.map(user => {
    user.age += 1;
    return user;
});
console.log(modifiedUser); // [{ name: 'John', age: 26 }, { name: 'Mike', age: 31 }, { name: 'Nancy', age: 41 }]

//! Filter
const filterUser = moreUsers.filter(user => user.age > 30);
console.log(filterUser); //? [{ name: 'Nancy', age: 41 }]
