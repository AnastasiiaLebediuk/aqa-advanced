function testPhrase (phrase, mil){
    setTimeout (()=> {
        console.log(phrase);
    }, mil);
}

testPhrase ('Hello, world', 1000);


// Альтернатива 

// function testPhrase (phrase){
//     console.log(`${phrase}`);
// }

// setTimeout(testPhrase, 1000, 'Hello, world')