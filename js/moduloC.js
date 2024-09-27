window.document.write("Olá Mundo!")
var p1 = document.getElementsByTagName("p")[1]
document.write(" Está escrito assim:"+ p1.innerText)
p1.style.color ="black"


var corpo=document.body
corpo.style.background ="pink"

// var d=document.getElementById('msg')
// d.style.background= "green"
// d.innerText = "Estou aguardando..."

var d=document.querySelector('#msg')
d.style.background = "blue"