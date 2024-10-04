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


// function calcular(){
//     var txtv = document.querySelector('#txtvel')
//     var res = document.querySelector('#res')
//     var vel = Number(txtv.value)
//     res.innerHTML = `<p>sua velocidade atual é ${vel} km/h</p>`
//     if (vel>60) {
        
//         res.innerHTML+= `<p>Você está multado por excesso de velocidade</p>`

//     }
//     res.innerHTML += `<p> Dirija sempre com seu cinto de segurança!</p>`
// }

// var idade=67
// if (idade<16){
//     console.log('Não vota')
// }else if (idade<18 || idade>65){
//         console.log('Voto Opcional')
//     } else{
//         console.log ('Voto Obirgatório')
//     }
// var agora = new Date ()
// var hora = agora.getHours()
//     console.log(`Agora são exatamente ${hora} horas`)
//     if (hora<12){
//         console.log ('Bom dia!')
//     }else if(hora<=18){
//         console.log ('Bom tarde!')
//     }else{
//         console.log ('Boa Noite!')
//     }

// Condição multipla
var agora =new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
        
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break

}