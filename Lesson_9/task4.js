const person = {
    firstName: "Serhii",
    lastName: "Lebediuk",
    age: "35",
};

person.email = "test@test.com";
delete person.age;

console.log(person);