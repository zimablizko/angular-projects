type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultType: ConversionDescriptor
) {
  let res;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    res = +input1 + +input2;
  } else {
    res = input1.toString() + input2.toString();
  }
  return res;
  // if (resultType === 'as-number'){
  //   return +res;
  // } else {
  //   return res.toString();
  // }
}

//Literal & Union Types
const combinedAges = combine(30, 33, 'as-number')
console.log(combinedAges)
const combinedStringAges = combine('30', '33', 'as-number')
console.log(combinedStringAges)
const combinedNames = combine('Max', 'Anna', 'as-text')
console.log(combinedNames)