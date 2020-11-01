let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

//unknown is more strict than any
//userName = userInput; //Error

let userInput1: any;
let userName1: string;

userInput1 = 5;
userInput1 = "max";

//unknown is more strict than any
userName1 = userInput1; //No Error

//Returns a never
function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occured", 500);

console.log(result);
