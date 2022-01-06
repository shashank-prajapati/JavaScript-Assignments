const printName = ((name) => "Hi" + name);


const printBill = ((name, bill) => `Hi  ${name} , please pay: ${bill}`);

const person = {
    name: "Noam Chomsky",
    age: 92
}

const {name,age} = person;

console.log(printName(name));
console.log(printBill(name,50));
