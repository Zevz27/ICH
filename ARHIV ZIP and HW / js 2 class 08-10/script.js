var i = 0;
var n = 0;
while (i < 5){
    i++;
    if (i == 3){
        continue
    }
    n = n + i
}
// console.log(i);
// console.log(n);

// const arr = [1,2,4, 'hello']
// let i = 0
// while( i < arr.length){
//     console.log(arr[i])
//     i++;
// }
// let x = 0
// while ( x <= 5){
//     x++
//      if(x == 3){
//         break
//      }
// }
// console.log(x)

for(let i = 1; i <= 10; i++){
    if (i > 7){
        break;
    }
    console.log(i);
}
// for(;i <= 10; i++){
//     if(i===8){
//         break
//     }
//     console.log(i)
// }

for (let i = 0; i <= 6; i++) {
    if( i % 2 == 0){
        continue
    }
    console.log(i)
}
let y = 0
while(y < 6){
    y++
    if(y % 2 == 0){
        continue
    }
    console.log(y)
}
for (let y = 1; y <= 5; y++){
    if(y === 3){
        continue;
    }
    console.log(y);
}
