// type Score = "A" | "B" | "C" | "D" | "F";

// interface User {
//   name: string;
//   age: number;
//   gender?: string; // 옵션 속성
//   readonly birthday: number; // 읽기전용
//   grade: Score; // "A", "B", "C", "D", "F" 만 가능
// }

// let user: User = {
//   name: "Kim",
//   age: 20,
//   birthday: 19990101,
//   grade: "A",
// };

// // user.birthday = 20000101; //Cannot assign to 'birthday' because it is a read-only property
// console.log(user);

// // 함수 인터페이스
// interface IsAdult {
//   (age: number): boolean;
// }

// const a: IsAdult = function (age) {
//   return age > 19;
// };

// // const a: IsAdult = (age) => age > 19;
// console.log(a(20));

// implements
interface Car {
  color: string;
  dateOfPurchase: number;
  start(): void;
}

// class Bmw implements Car {
//   color;
//   dateOfPurchase;

//   constructor(color: string, dateOfPurchase: number) {
//     this.color = color;
//     this.dateOfPurchase = dateOfPurchase;
//   }

//   start() {
//     console.log(`${this.color}색 BMW 자동차가 출발합니다.`);
//   }
// }

// const myBmw = new Bmw("blue", 20230101);
// myBmw.start();

interface SportCar extends Car {
  zero100: number;
}

const Benz: SportCar = {
  color: "black",
  dateOfPurchase: 20220101,
  zero100: 3.3,
  start() {
    console.log(`${this.color}색 벤츠가 출발합니다`);
  },
};

Benz.start()