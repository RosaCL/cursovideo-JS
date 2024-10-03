// var vel = 90
// console.log (`A velocidade do seu carro é ${vel}km/h`)
// if (vel>60) {
//     console.log('Você ultrapassou a velocidade permitida. MULTADO!')
// }
// console.log("Dirija sempre usando cinto de segurança!")
// var pais = 'Brasil'
// console.log (`Vivendo no ${pais}`)
// if (pais == 'Brasil'){
//     console.log('Você é brasileiro')

// }else{
//     console.log('Você é estrangeiro')
// }
function calcular(){
    var txtv = document.querySelector('#txtvel')
    var res = document.querySelector('#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>sua velocidade atual é ${vel} km/h</p>`
    if (vel>60) {
        res.innerHTML+= `<p>Você está multado por excesso de velocidade</p>`

    }
    res.innerHTML += `<p> Dirija sempre com seu cinto de segurança!</p>`
}