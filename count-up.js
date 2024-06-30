// let num = 5;

// while(num>=1){
//     setTimeout(() => {
//         console.log(num);
//     }, num*1000);
//     num--;
// }



for(let i=5; i>=1; i--){
    // console.log('top ', i);
    setTimeout(() => {
        console.log('top ', i);
    }, i*1000);
    // console.log('bottom ', i);
}

for(let i=1; i<=5; i++){
    // console.log('top ', i);
    setTimeout(() => {
        console.log(i);
    }, i*1000);
    // console.log('bottom ', i);
}