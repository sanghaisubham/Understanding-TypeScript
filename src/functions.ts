function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}
//undefined is a value
console.log(printResult(add(5, 12)));

var abc: undefined; //undefined is a type in typescript

let combineValues = add;

console.log(combineValues(8, 8)); //Execute function add via variable combineValues

// Function Types are types that define the function
//regarding the function parameters & return type of the function

let func: (a: number, b: number) => number;

func = add;

console.log(func(5, 7));
//no parameter that returns a number

let combineValuesFunc: Function;
//combineValuesFunc = 5;
combineValuesFunc = add;

//CallBack Function

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);

  addAndHandle(10, 20, (result) => {
    console.log("Result Callback returned " + result);
  });
}

//addAndHandle();
