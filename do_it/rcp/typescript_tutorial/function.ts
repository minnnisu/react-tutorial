// function sum(num1: number, num2: number): number {
//   return num1 + num2;
// }

// console.log(sum(10, 20));

// function hello(name?: string): void {
//   console.log(`Hello, ${name || "World"}`);
// }

// hello();

// interface User {
//   name: string;
//   age?: number;
//   gender?: any;
//   showUserInfo(): void;
// }

// const Sam: User = {
//   name: "Sam",
//   showUserInfo() {
//     console.log(`${this.name}, ${this.age}, ${this.gender}`);
//   },
// };

// function setUserInfo(this: User, age: number, gender: string): void {
//   this.age = age;
//   this.gender = gender;
// }

// const a = setUserInfo.bind(Sam);
// a(10, "F");
// Sam.showUserInfo();

// 함수 오버로딩
function add(a: string, b: string): string; // 함수 선언
function add(a: number, b: number): number; // 함수 선언
function add(a: any, b: any): any {
  // 함수 구현
  return a + b;
}

console.log(add("1", "2"));
console.log(add(1, 2));
