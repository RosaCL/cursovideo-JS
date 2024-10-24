function parimp(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
let res = parimp(22)
console.log(res)

function soma (n1=0, n2=0){
    return n1+n2
}
console.log(soma (2+244))

let v=function(x){
    return x*2
}
console.log(v(5))

function fatorial (p){
    let fat=1
    for(let c=p; c>1; c--){
        fat*=c
    }
    return fat
}
console.log (fatorial(5))
// fatorial de 5=5*4*3*2*1

