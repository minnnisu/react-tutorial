export const makeArray = (length: number) => new Array(length).fill(null)

// (2, 5) => [2,3,4,5]
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min)

// min ~ max 사이의 랜덤 값을 반환
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min
