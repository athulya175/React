// //Fisher-Yates algorithm
// const cards=['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
// console.log(cards)
// function Shuffle(x){
//     for(let i=1;i<x.length;i++){
//         const random=Math.floor(Math.random()*(i+1))        //scales it to 0 to <i+1.
//         ;[x[i],x[random]]=[x[random],x[i]]              // This is destructuring swap,for example if i=3 and random=1, it swaps x[3] and x[1].
//     }
// }
// Shuffle(cards)
// console.log(cards)

const cards=['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
function Shuffle(x){
    for(let i=x.length-1;i>0;i--){
    const random=Math.floor(Math.random()*(i+1))
    ;[x[i],x[random]]=[x[random],x[i]]
    }
}
Shuffle(cards)
console.log(cards)
