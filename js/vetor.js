let num=[5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

// let valores=[8,1,4,7,9]
// for(pos=0; pos<valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

// let valores=[8,1,4,7,9]
// for(let pos in valores){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }