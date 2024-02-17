// Primitive data that cant be changed
const number = 42;

// Const variable with 3 properties
const book = {
    name: "fantasy book",
    author: "bookman",
    pages: 687,
};

// adding a new property
const newInfo = {
    ...book,
    language: "eng"
};

console.log(newInfo);

// Update already existing properties
const updateInfo = {
    ...newInfo,
    name: "Fire and Ice"
};

console.log(updateInfo);

// Deleting a property
const {pages, ...deleteInfo} = updateInfo;

console.log(deleteInfo);