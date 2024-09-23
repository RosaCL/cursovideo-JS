//Guardar o valor digitado
var nome=window.prompt('Qual é o seu nome?')
window.alert( 'É um grande pazer te conhecer, ' + nome + '!') 
// Conversão de dados
var n1=Number.parseInt(window.prompt('Digite um número:'))
var n2=Number.parseInt(window.prompt('Digite outro número:'))
var s= n1+n2
window.alert('A somados valores é '+ s)

//Utilizar apenas number sem precisar converter, vale tanto inteiro ou real
var n1=Number(window.prompt('Digite um número:'))
var n2=Number(window.prompt('Digite outro número:'))
var s= n1+n2
window.alert('A somados valores é '+ s)

//Number para string
var n1=Number(window.prompt('Digite um número:'))
var n2=Number(window.prompt('Digite outro número:'))
var s= n1+n2
window.alert('A somados valores é '+ String(s))

// Formatação em template string para interpolar
var n1=Number(window.prompt('Digite um número:'))
var n2=Number(window.prompt('Digite outro número:'))
var s= n1+n2
window.alert(`A soma entre os ${n1} e ${n2} é igual = ${s}`)

//Escrever na html 
var nome=window.prompt('Qual é o seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras. <br/> `)
document.write(`Seu nome em maiúscula é ${nome.toUpperCase()}.<br/> `)
document.write(`Seu nome em maiúscula é ${nome.toLowerCase()}. `)