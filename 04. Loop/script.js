// Task 
const students = ['Ibrahim', 'Aysu', 'Tural', '9', 0, true, undefined, 'Isa', 'Elmir', 'Ferhad', 'Ramil']

// 1.Loop values of students (for)

for (let i=0; i < students.length; i++){
    console.log(students[i]);
}

console.log(" ");
// 2.Loop values of students (for_of)

for(const stu of students){
    console.log(stu);
}
// 3.Loop only strings values of studens (for)

for (let i=0; i < students.length; i++){
    if (typeof students[i] === "string")
console.log(students[i]);

}
// 4. 


for (const stu of students){
    if (typeof stu === "number")
    console.log(stu);


}
// 5.Loop only true values of studens (for)
for (let i=0; i < students.length; i++){
    if (students[i] === true)
console.log(students[i]);
}


const numbers = [4, 7, 8, 12, 22, 9, 12]
// 6.Loop only even values of numbers (for)

let even = [];
for(let i=0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0)
    even.push(numbers[i])
}
console.log(even)

// 7.Loop only odd values of numbers (for_of)

const odd = []
for(const num of numbers) {
    if (num % 2 === 1){
        odd.push(num)
    }
}
console.log(odd);

// 8.Sum values of numbers (for)
let sum = 0
for(let i=0; i< numbers.length; i++){
    sum += numbers[i]
}
console.log(sum);

// 9.Mult values of numbers (for_of)

let sum1 = 1
for(const num of numbers){
    sum1 *= num
    console.log(sum1);
}
// 10.Show all values except 12 (for/continue)

for (i=0; i < numbers.length; i++ ){
    if (numbers[i]=== 12){
    continue;
    }
    console.log(numbers[i]);
}

// 11.Sum values of numbers (reduce)

let result = numbers.reduce((sum, prev) => sum + prev, 0)
console.log(result);

const users = [
    {
        id: 1,
        name: 'Isa',
        age: 19,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Aysu',
        age: 20,
        gender: 'female'
    },
    {
        id: 4,
        name: 'Ramil',
        age: 13,
        gender: 'male'
    },
    {
        id: 5,
        name: 'Tural',
        age: 33,
        gender: 'male'
    },
    {
        id: 6,
        name: 'Ayxan',
        age: 25,
        gender: 'male'
    },
]

// 12.Sum age of users (reduce)

let summary = users.reduce((sum, user) => sum + user.age, 0 )
console.log(summary);
// 13.Mult age of users (reduce)

let summary1 = users.reduce((sum, user) => sum * user.age, 1)
console.log(summary1);

const user = {
    id: 1,
    name: 'Elnur',
    surname: 'Elnurlu',
    age: 19
}
// 14.Console keys of user(for_in)
for (let key in user){
    console.log(key);
}

// 15.Console values of user(for_in)
for (let values in user){
    console.log(user[values]);
}