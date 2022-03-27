/*const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};*/

enum Role {
  ADMIN = 5, READ_ONLY =2, AUTHOR
};

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};
let activities: string[];
activities = ['Sports'];

//Objects
console.log(person.name);

//Arrays
person.hobbies.forEach(hobby => console.log(hobby.toUpperCase()))

//Tuples
//person.role.push('admin'); //no error, exception for typescript
//person.role[1] = 10; //error
//person.role = [0, 'admin', 'user'];//error

//Enums
if (person.role === Role.ADMIN) {
  console.log('is admin')
}

//Any
let favActivities: any[];
favActivities = ['Sports', 5, false];