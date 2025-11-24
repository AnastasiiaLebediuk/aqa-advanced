const axios = require('axios');
const { faker } = require('@faker-js/faker');

jest.mock('axios');

async function testThree() {

    try {
        const test3 = await axios.get(

            'https://jsonplaceholder.typicode.com/posts/1'
        );

        return test3.data;

    } catch (error) {

        return 'Eroor test';
    }
}

test('Successful test', async () => {

    const mockTitle = faker.lorem.sentence();
    
    axios.get.mockResolvedValue({
        data: { Id: 11, title: mockTitle },
    });

    const test3 = await testThree();

    expect(test3).toEqual({ Id: 11, title: mockTitle });
    expect(typeof test3.title).toBe('string');
    console.log(test3);
});

test('Negative test', async () => {
    axios.get.mockRejectedValue(new Error('Bad request'));

    const test3 = await testThree();

    expect(test3).toBe('Eroor test');
    console.log(test3);
});
