async function responseApi(){
    try{

        const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
        const userPromise = fetch('https://jsonplaceholder.typicode.com/users/1').then(response1 => response1.json());
    
       
        const [todo,user] = await Promise.all([todoPromise, userPromise]);

        return [todo,user];

} catch(error){
    throw error;
    }
}

responseApi() 
.then(([todo, user]) => {
        console.log('Todo request:', todo);
        console.log('User request:', user);
    })

    .catch(error => {
        console.log('Error:', error);
    })



    async function responseRace(){
    try{

        const todoPromise1 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
        const userPromise1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response1 => response1.json());
    
       
        const result = await Promise.race([todoPromise1, userPromise1]);

        return result;

} catch(error){
    throw error;
    }
}
    
    responseRace()
    .then(resalt => console.log('Response:', resalt))
    .catch(error => console.log('Error1:', error))