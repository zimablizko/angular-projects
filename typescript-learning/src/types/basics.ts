function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const res = n1+n2;
  if (showResult){
    console.log(phrase + res);
  }
  return res;
}

const number1: number = 5;
const number2 = 3.5;
const printResult = true;
const resultPhrase = 'Result is: ';
// const res = add(number1, number2, printResult);
// console.log(res)

add(number1, number2, printResult,resultPhrase);