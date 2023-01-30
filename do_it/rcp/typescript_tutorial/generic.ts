// function getSize<T>(arr: T[]): number {
//   return arr.length;
// }

// const arr1 = [1, 2, 3];
// console.log(getSize<number>(arr1));

// const arr2 = ["one", "Two", "Three"];
// console.log(getSize<string>(arr2));

interface Phone<T> {
  name: string;
  price: number;
  option: T;
}

const myPhone: Phone<object> = {
  name: "S22",
  price: 100,
  option: {
    discount: "10퍼센트",
  },
};

const yourPhone: Phone<null> = {
  name: "S21",
  price: 50,
  option: null,
};
