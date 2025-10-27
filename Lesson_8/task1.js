function log(any){
    console.log(any)
}

const numbers = [2, -5, 0, 7, -3, 0, 10, -8, 4];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;


for (let i = 0; i < numbers.length; i++){

    const num = numbers[i];

    if (num > 0){
       
        positiveCount ++;

    }else if (num < 0){
        
        negativeCount ++;

    }else {
        
        zeroCount ++;
    }
}
console.log("Кількість додатних чисел:", positiveCount);
console.log("Кількість негативних чисел:", negativeCount);
console.log("Кількість нульових чисел:", zeroCount);


