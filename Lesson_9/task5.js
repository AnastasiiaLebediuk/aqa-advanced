const users = [
    { name: "Nastia", email: "nastia@test.com", age: "26" },
    { name: "Serhii", email: "serhii@test.com", age: "35" }
];

for (const user of users){
    const {name, email, age} = user;
    console.log(`${name} is ${age} years old and email ${email}`);
    console.log(age);
    console.log(name);
    console.log(email);
}