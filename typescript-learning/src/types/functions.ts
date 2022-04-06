function add1(n1: number, n2: number): number {
  return n1 + n2;
}

//Void return type
function printRes(num: number): void {
  console.log('Res: ' + num);
}

printRes(add1(5, 12))

//Function type
let combineValues: (a: number, b: number) => number;

combineValues = add1;
//combineValues = printRes; Error
//combineValues = 4; Error
console.log(combineValues(3, 2))

//Callback type
function addAndHandle(
    n1: number,
    n2: number,
    cb: (num: number) => void) {
  const res = n1 + n2;
  cb(res);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
})