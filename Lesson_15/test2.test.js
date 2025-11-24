const axios = require('axios');

async function secondTest() {
    try {
        const test2 = await axios.get(
            'https://jsonplaceholder.typicode.com/posts/1',
            {
                headers: { CustomHeader: 'TestHeader' },
                params: { userId: 2 },
            }
        );

        return test2;
    } catch (error) {
        return 'Error text';
    }
}

test('Handling error', async () => {
    const result = await secondTest();

    expect(result.status).toBe(200);
    expect(result.config.params.userId).toBe(2);
    expect(result.config.headers.CustomHeader).toBe('TestHeader');
    console.log(result.config.headers.CustomHeader);
});
