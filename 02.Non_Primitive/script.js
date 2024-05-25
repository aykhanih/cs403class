// const user = {
//     firstName: "Aykhan",
//     lastName:  "Hajizada",
//     age: 25,
//     info: {
//         address: "Varovski",
//         city: "Baku",
//         country: "Azerbaijan",
//     },
//     edu: {
//         uni: "UNEC",
//         point: 350,
//     },
//     work: {
//         company: "iSpace",
//         experience: "11 months",
//     }
// }


// console.log(user);
// const user1 = user
// console.log(user1);
// const user2 = {...user}
// console.log(user2);
// const user3 = structuredClone(user)
// console.log(user3);
// const user4 = JSON.parse(JSON.stringify(user))
// console.log(user4);

// console.log(user);
// console.log(user.firstName, user.lastName, user.age,);
// console.log(user.info.address, user.info.city, user.info.country);
// console.log(user.edu.uni, user.edu.point);
// console.log(user.work.company, user.work.experience);





// let user = "aykhan"
// let user2 = "aykhan hajizada"

// console.log(user.toUpperCase().slice(0, 1) + user.slice(1));
// console.log(user.replace ("a", "A"));
// console.log(user2.slice(0, 6).replace ("a", "A") + user2.slice(6).replace("h", "H"));
// console.log(user2.toUpperCase().slice(0,1) + user2.slice(1,6) + user2.toUpperCase().slice(6,7) + user2.slice(7));



const users = [

{
    name: "Ayxan",
    age: 25,
    gender: "Male"

},

{
    name: "Elshen",
    age: 33,
    gender: "Male"

},

{
    name: "Rufat",
    age: 24,
    gender: "Male"

},

{
    name: "Elnara",
    age: 25,
    gender: "Female"

},

{
    name: "Aysu",
    age: 20,
    gender: "Female"

},

]


console.log(users.map((user) => user.age));
console.log(users.map((user) => user.gender));
console.log(users.map((user) => user.name));



console.log(users.filter ((user) => user.age >= 20));
console.log(users.filter((user) => user.gender == "Female"));
console.log(users.filter((user) => user.name.startsWith ("R")));
console.log(users.filter((user) => user.name.includes ("a")));
console.log(users.filter ((user) => user.age % 2 !== 1));
console.log(users.filter ((user) => user.age % 2 !== 0));
console.log(users.map((user, index) => index));


console.log(users.map((user, test1) => test1 % 2 == 0));
{
let sum = 0
users.map (user => sum += user.age)
console.log(sum);}

{
let inx = 0
users.map((users, test) => inx += test)
console.log(inx);
}



console.log(users.map((user) => user.age * 5));

{
    let sum = 0
const test = ((users.filter((user) => user.gender == "Female")).map(user => sum += user.age))
console.log(sum);
}

