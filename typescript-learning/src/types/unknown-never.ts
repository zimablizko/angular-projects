//Unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
//userName = userInput; Error

if (typeof userInput === 'string'){
  userName = userInput;
}

//Never type
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
  //while (true) {}
}

generateError('Error!', 400);