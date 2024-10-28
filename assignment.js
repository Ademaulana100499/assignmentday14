"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
console.log(getFullName({ firstName: "Ade", lastName: "Maulana" }));
function wrapInArray(item) {
    return [item];
}
console.log(wrapInArray(123));
console.log(wrapInArray("Ade Maulana"));
console.log(wrapInArray(true));
console.log(wrapInArray({ nama: "Ade", umur: 20 }));
console.log(wrapInArray([1, 2, 3]));
