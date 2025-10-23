function log(any) {
    return console.log(any)
}


function divide(numerator, denominator) {
    return {
        numerator: numerator,
        denominator: denominator,

        checkError: function () {

            if (this.denominator === 0) {

                throw new Error("You can't divide by 0");

            }
            if (typeof this.numerator !== 'number' || typeof this.denominator !== 'number') {

                throw new Error('The value must be a number');

            }

        },


        calculate: function () {

            this.checkError()
            return this.numerator / this.denominator;
        }
    };

}



try {
    const divide1 = new divide(8, 4)
    log(divide1.calculate());
} catch (error) {
    log(error.message);

} finally {
    log('Work completed');
};


// Альтернативний варіант 

// function Divide(numerator, denominator) {

//     this.numerator = numerator;
//     this.denominator = denominator;

//     this.checkError = function () {

//         if (this.denominator === 0) {

//             throw new Error("You can't divide by 0");

//         }
//         if (typeof this.numerator !== 'number' || typeof this.denominator !== 'number') {

//             throw new Error('The value must be a number');

//         }
//     }

//     this.calculate = function () {

//         this.checkError()
//         return this.numerator / this.denominator;
//     }
// };


// try {
//     const divide2 = new Divide(10, 5)
//     log(divide2.calculate());
// } catch (error) {
//     log(error.message);

// } finally {
//     log('Work completed');
// };


