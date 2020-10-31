function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  console.log(typeof n1);
  console.log(typeof n2);
  if (showResult) {
    const ans = n1 + n2;
    console.log(phrase + n1 + n2); //Not diff with below line
    console.log(phrase + ans);
  } else {
    return n1 + n2;
  }
}

let number1 = 5; //Here TS used type inference to infer the type
//number1= 'ABC'
const number2 = 2.8;
const printResult = true;
const phrase = "Result is: ";
add(number1, number2, printResult, phrase);
//console.log(result);
