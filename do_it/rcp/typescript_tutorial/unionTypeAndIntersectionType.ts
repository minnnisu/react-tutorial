// UnionType
type Job = "police" | "developor" | "teacher";

let myJob: Job = "developor";
// myJob = "Scientist";

// IntersectionType
interface Person {
  name: string;
  age: number;
}

interface Developer {
  skill: string;
}

const user: Person & Developer = {
  name: "Kim",
  age: 20,
  skill: "Front",
};
