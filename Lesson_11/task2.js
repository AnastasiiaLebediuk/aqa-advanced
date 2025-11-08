
const todo = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());

const user = fetch('https://jsonplaceholder.typicode.com/users/1').then(response1 => response1.json());

Promise.all([todo, user])

    .then(([todo, user]) => {
        console.log('Todo request:', todo);
        console.log('User request:', user);
    })

    .catch(error => {
        console.log('Error:', error);
    })


Promise.race([user, todo])
    .then(resalt => console.log('Response:', resalt))
    .catch(error => console.log('Error:', error))

