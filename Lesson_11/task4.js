class ApiService {
    constructor() {
        this.todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';
        this.userUrl = 'https://jsonplaceholder.typicode.com/users/1';
    }

    async responseApi() {
        try {

            const todoPromise = fetch(this.todoUrl).then(response => response.json());
            const userPromise = fetch(this.userUrl).then(response1 => response1.json());


            const [todo, user] = await Promise.all([todoPromise, userPromise]);

            console.log('Todo request:', todo);
            console.log('User request:', user);

            return [todo, user];

        } catch (error) {
            console.log('Error:', error);
            throw error;
        }
    }

}


class RaceApi {
    constructor() {
        this.todo1Url = 'https://jsonplaceholder.typicode.com/todos/1';
        this.user1Url = 'https://jsonplaceholder.typicode.com/users/1';
    }

    async responseRace() {
        try {

            const todoPromise1 = fetch(this.todo1Url).then(response => response.json());
            const userPromise1 = fetch(this.user1Url).then(response1 => response1.json());


            const result1 = await Promise.race([todoPromise1, userPromise1]);

            console.log('Response:', result1);
            return result1;

        } catch (error) {
            console.log('Error1:', error)
            throw error;
        }
    }
}


const apiService = new ApiService();
const raceApi = new RaceApi();

apiService.responseApi();
raceApi.responseRace ();