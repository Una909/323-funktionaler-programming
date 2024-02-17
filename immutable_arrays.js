// Arrays with 2 properties and identificator
const guestList = [
    { id: 1, name: "Franky", vip: "yes"},
    { id: 2, name: "Misty", vip: "no"}
];

console.log(guestList);

// Adding a new array
const newGuest = [
    ...guestList,
    {id: 3, name: "Mario", vip: "no"}
];

console.log(newGuest);

// New Array with the same elements as before but one elemetns property is updated
const updatedGuestList = newGuest.map(changeStatus);
function changeStatus(newGuest) {
    if (newGuest.id === 3) {
        return {...newGuest, vip: "yes"};
    }
    return newGuest;
}

console.log(updatedGuestList);

// First finding the lowest id in the objects
const minId = Math.min(...updatedGuestList.map(object => object.id));
// Then filter out the lowest one
const reducedGuestList = updatedGuestList.filter(object => object.id !== minId);

console.log(reducedGuestList);

// Calculating the average number
const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const total = reviews.reduce((a, g) => a + g);
const average = total / reviews.length;

console.log("Durchschnitt:", average);

// Grouping and couting
