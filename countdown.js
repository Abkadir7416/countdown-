function countdown(sec){
    for(let i=sec; i>=1; i--){
        setTimeout(() => {
            console.log(i);
        }, (sec-i) * 1000 );
    }
}

countdown(5);