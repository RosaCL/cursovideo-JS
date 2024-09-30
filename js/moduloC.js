// window.document.write("Olá Mundo!")
// var p1 = document.getElementsByTagName("p")[1]
// document.write(" Está escrito assim:"+ p1.innerText)
// p1.style.color ="black"


// var corpo=document.body
// corpo.style.background ="pink"

// var d=document.getElementById('msg')
// d.style.background= "green"
// d.innerText = "Estou aguardando..."

// var d=document.querySelector('#msg')
// d.style.background = "blue"
var a = document.getElementById('area')
a.addEventListener ('click', clicar)
a.addEventListener ('mouseenter', entrar)
a.addEventListener ('mouseout', sair)
function clicar(){
    
    a.innerText='Clicou!'
    a.style.background='red'
}
function entrar(){
   a.innerText='Entrou!'
}
function sair(){
    a.innerText='Saiu!'
     a.style.background='green'
}
function somar(){
    var tn1=document.getElementById('txtn1')
    var tn2=document.getElementById('txtn2')
    var res=document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1+n2
    res.innerHTML= `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong> `



}