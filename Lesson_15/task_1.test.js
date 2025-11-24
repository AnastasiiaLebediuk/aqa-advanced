const axios = require('axios');

async function firstTest() {
    try {
        const url = await axios.get(
            'htps://jsonplaceholder.typicode.com/posts/1'
        );
    } catch (error) {
        return 'Error test';
    }
}

test('Error handling', async () => {
    const result = await firstTest();
    expect(result).toBe('Error test');
});
