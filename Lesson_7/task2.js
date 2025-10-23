function log(any){
    return console.log(any)
}



function recursiveCounter (num){
    if (num < 0) {
       return;
    }

    log (num);
    recursiveCounter (num-1);
   
}

recursiveCounter(5);