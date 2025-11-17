const axios = require('axios');

describe('GET tests', () => {
    let url = {
        url: 'https://jsonplaceholder.typicode.com/',
    };

    beforeAll(() => {
        console.log('GET tests');
    });
    test('Test1 Get', async () => {
        const response = (await axios.get(`${url.url}posts`)).data;
        console.log(response);
        expect(response[0].userId).toBe(1);
    });

    test('Get first user', async () => {
        const response2 = await axios.get(`${url.url}posts/1`);
        expect(response2.data.id).toBeDefined();
        expect(response2.data.userId).toBe(1);
    });

    test('Get comment', async () => {
        const response3 = await axios.get(`${url.url}posts/1/comments`);
        expect(response3.status).toBeDefined();
        expect(response3.status).toBe(200);
        expect(response3.data[0].email).toBeDefined();
    });

    test('Get test4', async () => {
        const response4 = await axios.get(`${url.url}comments?postId=1`);
        expect(response4.data[0].postId).toBe(1);
        expect(response4.data[0].name).toBeDefined();
    });

    test('Get todos', async () => {
        const response5 = await axios.get(`${url.url}todos`);
        expect(response5.data[0].title).toBeDefined();
        expect(response5.data[0].completed).toBe(false);
        expect(response5.data[3].completed).toBe(true);
    });
});

describe('POST tests', () => {
    let url = {
        url: 'https://jsonplaceholder.typicode.com/',
    };

    beforeAll(() => {
        console.log('POST tests');
    });

    test('Post test1', async () => {
        const body = {
            title: 'new text',
            body: 'test body',
            userId: 1,
        };
        const response6 = await axios.post(`${url.url}/posts`, body);

        console.log(response6.data);
        expect(response6.data.title).toBe(body.title);
        expect(response6.data.body).toBeDefined();
        expect(response6.status).toBe(201);
        expect(response6.data.userId).toBe(body.userId);
    });

    test('Post test2', async () => {
        const bodyComments = {
            postId: '22',
            name: 'test comment name',
            email: 'test@test.com',
        };

        const response7 = await axios.post(`${url.url}/comments`, bodyComments);

        console.log(response7.data);
        expect(response7.data.postId).toBe(bodyComments.postId);
        expect(response7.data.name).toBe(bodyComments.name);
        expect(response7.data.email).toBeDefined();
    });

    test('Post test3', async () => {
        const bodyAlbums = {
            userId: '22',
            title: 'test title',
        };

        const response8 = await axios.post(`${url.url}/albums`, bodyAlbums);

        console.log(response8.data);
        expect(response8.data.userId).toBeDefined();
        expect(response8.data.title).toBe(bodyAlbums.title);
    });

    test('Post test4', async () => {
        const bodyPost = {
            userId: '55',
            body: 'test body',
        };

        const response9 = await axios.post(`${url.url}/posts`, bodyPost);

        console.log(response9.data);
        expect(response9.data.userId).toBe(bodyPost.userId);
        expect(response9.data.body).toBeDefined();
        expect(response9.status).toBe(201);
        expect(response9.data.id).toBeDefined();
    });

    test('Post test5', async () => {
        const test5Body = {
            title: 'test title',
            userId: '77',
        };

        const response10 = await axios.post(`${url.url}/posts`, test5Body);

        expect(response10.data.title).toBe(test5Body.title);
        expect(response10.data.userId).toBeDefined();
        expect(response10.status).toBe(201);
        console.log(response10.data);
    });
});

