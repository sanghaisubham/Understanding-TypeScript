//Union Types
type Combinable = number | string; //creating custom types
function combine(n1: Combinable, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAges = combine(20, 40);
console.log(combinedAges);

const combinedNames = combine("subham", "sanghai");
console.log(combinedNames);

//Literal Types

function combines(
  n1: number | string,
  n2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAgess = combines(20, 40, "as-number");
console.log(combinedAgess);

//const combinedAgesError = combines("20", "40", "as-numbers"); Gives error

const combinedAgesString = combines("20", "40", "as-number");
console.log("Number as String " + combinedAgesString);
const combinedNamess = combines("subham", "sanghai", "as-text");
console.log(combinedNamess);
