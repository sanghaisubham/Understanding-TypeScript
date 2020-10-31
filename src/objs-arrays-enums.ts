const ADMIN = 1;

enum ROLETYPE {
  ADMIN,
  AUTHOR
}

//Enum with increasing values
enum enumEg {
  X = 1,
  Y // Y is assigned as 2
}

const person: {
  name: string;
  age: number;
  role: [number, string];
  roleType: number; // Tuple
} = {
  name: "Sanghai",
  age: 24,
  role: [2, "author"],
  roleType: ROLETYPE.ADMIN
};

person.role[1] = 10; // this is not correct

const person1 = {
  name: "Sanghai",
  age: 24,
  hobbies: ["cooking", "sports"]
};
let activity: string[];
activity = ["Sports"];
let activity1: any[];
activity1 = ["Sports", 1];

console.log(person.name);
console.log(person1.age);
console.log(activity[0]);
console.log(activity1[0]);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
