function log(any){
    return console.log(any)
}



function handleNum (number, handleEven, handleOdd){

    if (number % 2 === 0 ? true : false){

        handleEven();
    }else{
        handleOdd();
    }
    }


    function handleEven() {
        log('number is even')
    }

    function handleOdd(){
        log('number is odd')
    }

handleNum ( 13, handleEven, handleOdd);
