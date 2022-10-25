et person ={
    name:"Muhsin",
    age:20,
    image:"",
    email:"",
    result:{
        bangla:99,
        english:98,
        math:97,
    },
    add: () => {
        //return this.name + " " + "is" + " " + this.age + " " + "years old";
        return`${person.name} is ${person.age} years old`;
    },
};

let person2 =[
    "Muhsin",
    "Sabbir",
    "Nurul",
    "Rajib",
    "Sakib",
    "Sima",
];


console.log(person.name);
console.log(person['name']);
console.log(person.result.math);
console.log(person.add());

console.log(person2[0])

function sum(value1, value2)
{
    return value1 + value2;
}

let recievedValue= sum(10, 10);
console.log(recievedValue);

const add =(value1,value2)=>{
    return value1 + value2;
}

let recievedResult = add(10,30);
console.log(recievedResult);
