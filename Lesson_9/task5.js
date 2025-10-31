const users = [
    { name: "Nastia", age: "26", specialty: "QA" },
    {},
    { name: "Serhii", email: "serhii@test.com", age: "35" },
    {city: "Lviv"}
];

for (const {name, email, age, specialty, city} of users){

    console.log(`${name || "_"} is ${age || "*"} years old and ${specialty?? "#"} email ${email?? "$"}, ${city ?? "L"}`);
    // console.log(city);
}

// Альтернативний варіант 

// for (const {name = users.name ?? "_", email = "*", age = users.age || "$", specialty = users.specialty ?? "@", city = "Lviv"} of users){

//     console.log(`${name} is ${age} years old and ${specialty} email ${email}, ${city}`);
//     console.log(specialty);
// }