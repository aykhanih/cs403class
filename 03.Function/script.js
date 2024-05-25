const array = [5, 6, 7, 8, 9]
const array2 = [50, 8, 25, 12, 19]

const calcAvg = (anyArr) => {
    let mult = 1
    anyArr.map(item => mult *= item)
    return mult
}

const calc = (anyArr) => {
    let mult = 0
    anyArr.map(item => mult += item)
    return mult
}
console.log(calc(array));

console.log(calcAvg(array));

const odd = (anyArr1) => {
    let test = anyArr1.filter(item => item % 2 !== 0)
    return test
}

console.log(odd(array));

const even = (anyArr) => {
    let test = anyArr.filter(item => item % 2 !== 1)
    return test
}
console.log(even(array));

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
        age: 30,
        gender: 'male'
    },
]

const names = (anyArr) => {
    let test = anyArr.map(item => item.name)
    return test
}

console.log(names(users));

const gender = (newArr) => {
    let test = newArr.map(item => item.gender)
    return test
}
console.log(gender(users));

const age = (newArr) => {
    let test = newArr.map(item => item.age)
    return test
}
console.log(age(users));

const gender1 = (newArr) => {
    let test = newArr.map(item => item.gender == "male")
    return test
}
console.log(gender1(users));

const age1 = (newArr) => {
    let test = newArr.map(item => item.age >= 20)
    return test
}
console.log(age1(users));


const getValue = (firstName, lastName, age = ` `) => {
    return `${firstName} ${lastName} ${age}`
}
console.log(getValue("Aykhan", "Hajizada"));
