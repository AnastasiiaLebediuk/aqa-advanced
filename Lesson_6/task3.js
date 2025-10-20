function checkOrder(ordered, available){
    switch (true){
        case (ordered <= 0):
            return 'Your order is empty';

        case (ordered > available):
            return 'Your order is too large, we don’t have enough goods.';
        
        case (ordered <= available):
            return 'Your order is accepted';
    
    }
}

console.log(checkOrder(1, 11));

// Альтернативний варіант
// function checkOrder(ordered, available){
//     if (ordered <= 0){
//         return 'Your order is empty';
//     } else if (ordered > available){
//         return 'Your order is too large, we don’t have enough goods.';
//     }else {
//          return 'Your order is accepted';
//     }
// }
// console.log(checkOrder(8, 11));