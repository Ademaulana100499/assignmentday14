type Person = {
  firstName: string;
  lastName: string;
};
function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

console.log(getFullName({ firstName: "Ade", lastName: "Maulana" }));

function wrapInArray<T>(item: T): T[] {
  return [item];
}
console.log(wrapInArray(123));
console.log(wrapInArray("Ade Maulana"));
console.log(wrapInArray(true));
console.log(wrapInArray({ nama: "Ade", umur: 20 }));
console.log(wrapInArray([1, 2, 3]));

export {};
