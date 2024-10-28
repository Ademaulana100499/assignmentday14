function penjumlahan(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(penjumlahan(5, 7));

function errorMsg(err: string): never {
  throw new Error(err);
}

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(user: User): User {
  return user;
}
createUser({ name: "John", age: 30, isActive: true });

type ErrorResp = {
  status: string;
  message: string;
};

function handleError(): ErrorResp {
  return { status: "error", message: "ada yang salah" };
}
console.log(handleError());

let cars: string[] = ["Ayla", "Agya", "Ca;ya", "Sigra"];
let score: number[] = [1, 2, 3, 4, 5];

type Obj = {
  name: string;
  age: number;
};
let obj: Obj[] = [
  { name: "Ade", age: 25 },
  { name: "Maulana", age: 24 },
];

let status: "active" | "inactive" | "pending";
let status2: string | number = "test";

let data10: unknown;
data10 = "test";
if (typeof data10 === "string") {
  data10.toUpperCase();
}

export {};
